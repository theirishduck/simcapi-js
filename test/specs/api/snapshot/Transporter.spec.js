/*global window sinon */
define(function(require){

    var Transporter = require('api/snapshot/Transporter').Transporter;
    var SimCapiValue = require('api/snapshot/SimCapiValue');
    var SimCapiMessage = require('api/snapshot/SimCapiMessage');
    var SharedSimData = require('api/snapshot/SharedSimData');
    require('sinon');

    describe('Transporter', function() {

        var requestToken = 'requestToken';
        var authToken = 'testToken';
        var transporter = null;
        var sandbox = null;

        beforeEach(function() {          
            sandbox = sinon.sandbox.create();
            
            // mock out event registration on the window
            sandbox.stub(window, 'addEventListener', function(eventType, callback) {
                expect(eventType).to.be('message');
                expect(callback).to.be.ok();
            });

            transporter = new Transporter({
                requestToken : requestToken
            });

        });
        
        afterEach(function() {
          sandbox.restore();
        });

        /*
         * Helper to mock out PostMessage on the window object.
         */
        var mockPostMessage = function(assertCallback) {
            sandbox.stub(transporter, 'sendMessage', assertCallback);
        };

        /*
         * Helper to perform fake handshake between sim/viewer
         */
        var doHandShake = function() {
            var config = SharedSimData.getInstance();
            config.setLessonId('1');
            config.setQuestionId('qid');
            config.setServicesBaseUrl('someurl');
            
            // create a handshakeResponse message
            var handshakeResponse = new SimCapiMessage({
                type : SimCapiMessage.TYPES.HANDSHAKE_RESPONSE,
                handshake : {
                    requestToken: requestToken,
                    authToken: authToken,
                    config :  config
                }
            });

            // process handshake response so it remembers the auth token
            transporter.capiMessageHandler(handshakeResponse);
        };
        
        describe('HANDSHAKE_REQUEST', function(){

            it('should send a requestHandshake when trying to send ON_READY notification', function() {

                // mock out handshake request upon initialization
                mockPostMessage(function(message){
                    // verify that the handshake request has a request token
                    expect(message.type).to.be(SimCapiMessage.TYPES.HANDSHAKE_REQUEST);
                    expect(message.handshake.requestToken).to.be(requestToken);
                    expect(message.handshake.authToken).to.be(null);
                });

                transporter.notifyOnReady();

                expect(window.addEventListener.called).to.be(true);
                expect(transporter.sendMessage.called).to.be(true);
            });

        });

        describe('CONFIG_CHANGE', function() {
            
            beforeEach(function() {
                doHandShake();
                
                // verify old config
                var config = transporter.getConfig();
                expect(config.getData().lessonId).to.be('1');
                expect(config.getData().questionId).to.be('qid');
                expect(config.getData().servicesBaseUrl).to.be('someurl');
            });
            
            var updateConfig = function(token) {
                // update config
                var newConfig = SharedSimData.getInstance();
                newConfig.setLessonId('2');
                newConfig.setQuestionId('newqid');
                newConfig.setServicesBaseUrl('newurl');
                
                // process change event
                var configChangeMessage = new SimCapiMessage({
                    type : SimCapiMessage.TYPES.CONFIG_CHANGE,
                    handshake : {
                        authToken : token,
                        config : newConfig
                    }
                });
                transporter.capiMessageHandler(configChangeMessage);
            };
            
            it('should ignore CONFIG_CHANGE when authToken does not match', function() {
                updateConfig('bad token');
                
                // verify that the config has changed
                var config = transporter.getConfig();
                expect(config.getData().lessonId).to.be('2');
                expect(config.getData().questionId).to.be('newqid');
                expect(config.getData().servicesBaseUrl).to.be('newurl');
            });
            
            it('should update CONFIG_CHANGE when authToken matches', function() {
                updateConfig(authToken);
                
                // verify that the config has changed
                var config = transporter.getConfig();
                expect(config.getData().lessonId).to.be('2');
                expect(config.getData().questionId).to.be('newqid');
                expect(config.getData().servicesBaseUrl).to.be('newurl');
            });
            
        });
        
        describe('HANDSHAKE_RESPONSE', function() {

            it('should ignore HANDSHAKE_RESPONSE when requestToken does not match', function(){

                // create a handshakeResponse message with a different request token
                var handshakeResponse = new SimCapiMessage({
                    type : SimCapiMessage.TYPES.HANDSHAKE_RESPONSE,
                    handshake : {
                        requestToken : 'bad request token',
                        authToken : authToken
                    }
                });

                // mock out postMessage for ON_READY. This shouldn't be called
                mockPostMessage(function(){});

                transporter.capiMessageHandler(handshakeResponse);

                // verify that the message was not called
                expect(transporter.sendMessage.called).to.be(false);
            });

        });

        describe('ON_READY', function() {

            it ('should send ON_READY followed by a VALUE_CHANGE message when told', function() {

                doHandShake();

                var invoked = 0;
                var gotOnReady = -1;
                var gotValueChange = -1;

                // mock out postMessage for ON_READY message
                mockPostMessage(function(message) {
                    // remember the order that we recieved messages
                    switch(message.type) {
                    case SimCapiMessage.TYPES.ON_READY:
                        gotOnReady = ++invoked; break;
                    case SimCapiMessage.TYPES.VALUE_CHANGE:
                        gotValueChange = ++invoked; break;
                    }

                    // verify that the tokens are remembered
                    expect(message.handshake.requestToken).to.be(requestToken);
                    expect(message.handshake.authToken).to.be(authToken);
                });

                transporter.notifyOnReady();

                // verify that a message was sent
                expect(transporter.sendMessage.called).to.be(true);
                expect(gotOnReady < gotValueChange).to.be(true);
            });

            it('should remember pending ON_READY notification and send it after a succesfull HANDSHAKE_RESPONSE', function(){

                var invoked = 0;
                var gotOnReady = -1;
                var gotValueChange = -1;

                transporter.getHandshake().authToken = null;

                // mock out postMessage for ON_READY message
                mockPostMessage(function(message) {
                    // remember the order that we recieved messages
                    switch(message.type) {
                    case SimCapiMessage.TYPES.ON_READY:
                        gotOnReady = ++invoked; break;
                    case SimCapiMessage.TYPES.VALUE_CHANGE:
                        gotValueChange = ++invoked; break;
                    }
                });

                transporter.notifyOnReady();

                // verify that the notification was not sent
                expect(gotOnReady === gotValueChange).to.be(true);

                // create a handshakeResponse message
                var handshakeResponse = new SimCapiMessage({
                    type : SimCapiMessage.TYPES.HANDSHAKE_RESPONSE,
                    handshake : {
                        requestToken: requestToken,
                        authToken: authToken
                    }
                });

                // process handshake response so it sends the pending notificaiton
                transporter.capiMessageHandler(handshakeResponse);

                // verify that a message was sent
                expect(transporter.sendMessage.called).to.be(true);
                expect(gotOnReady < gotValueChange).to.be(true);
            });

        });

        describe('VALUE_CHANGE', function(){

            var outgoingMap = null;

            beforeEach(function(){

                outgoingMap = {
                    // create three attributes (float, string and boolean types) with expected
                    // updates of:
                    // attr1 -> value1
                    // attr2 -> value2
                    // attr3 -> value3
                    // values 1-3 are NOT the current values.
                    // @see createAttr for more details
                    'these.are.fake.objects.attr1' : createAttr(SimCapiValue.TYPES.NUMBER, false, 'attr1', 0.222),
                    attr2 : createAttr(SimCapiValue.TYPES.STRING, false, 'attr2', 'value2'),
                    attr3 : createAttr(SimCapiValue.TYPES.BOOLEAN, false, 'attr3', true),
                    attr4 : createAttr(SimCapiValue.TYPES.BOOLEAN, false, 'attr4', false)
                };

                // create a new instance with outgoingMap parameters
                transporter = new Transporter({
                    requestToken : requestToken,
                    authToken : authToken, 
                    outgoingMap : outgoingMap
                });

                transporter.removeAllChangeListeners();

            });

            // helper to create entries in outgoing map. expectedKey and expectedValue represent
            // expected updates. Eg, the value of expectedKey changes to expectedValue.
            var createAttr = function(type, readonly, expectedKey, expectedValue) {
                return new SimCapiValue({
                  type: type,
                  readonly: readonly,
                  key: expectedKey,
                  value: expectedValue
                });
            };

            /*
             * create a value change message that performs the following changes:
             * attr1 -> value1
             * attr2 -> value2
             * attr3 -> value3 
             */
            var createGoodValueChangeMessage = function() {
                return new SimCapiMessage({
                    type : SimCapiMessage.TYPES.VALUE_CHANGE,
                    handshake : {
                        requestToken : requestToken,
                        authToken : authToken
                    },

                    // create two attribute changes as mentioned above
                    values : {
                        'these.are.fake.objects.attr1' : new SimCapiValue({
                            key: 'attr1',
                            type : SimCapiValue.TYPES.NUMBER,
                            value : 0.5
                        }),
                        'attr2' : new SimCapiValue({
                            key: 'attr2',
                            type : SimCapiValue.TYPES.STRING,
                            value : 'value2'
                        }),
                        'attr3' : new SimCapiValue({
                            key: 'attr3',
                            type : SimCapiValue.TYPES.BOOLEAN,
                            value : false
                        }),
                        'attr4' : new SimCapiValue({
                            key: 'attr4',
                            type : SimCapiValue.TYPES.BOOLEAN,
                            value : false 
                        })
                    }
                });
            };

            it('should attempt to update the model when a VALUE_CHANGE message is recieved', function(){

                var valueChangeMsg = createGoodValueChangeMessage();

                var failed = true;
                transporter.addChangeListener(function(){
                  failed = false;
                });

                transporter.capiMessageHandler(valueChangeMsg);

                expect(failed).to.be(false);
            });

            it('should give false when a Boolean false VALUE_CHANGE is recieved', function (){

                var expectedValueChangeMsg = transporter.notifyValueChange();

                expect(expectedValueChangeMsg.values['these.are.fake.objects.attr1'].value).to.be(0.222);
                expect(expectedValueChangeMsg.values.attr2.value).to.be('value2');
                expect(expectedValueChangeMsg.values.attr3.value).to.be(true);
                expect(expectedValueChangeMsg.values.attr4.value).to.be(false);
            });

            it('should ignore VALUE_CHANGE message if values is undefined', function(){

                // create a bad value change message with values = undefined
                var badValueChangeMsg = new SimCapiMessage({
                    type : SimCapiMessage.TYPES.VALUE_CHANGE,
                    handshake : {
                        requestToken : requestToken,
                        authToken : authToken
                    },
                    values : undefined
                });

                var failed = false;
                transporter.addChangeListener(function(values){
                  failed = true;
                });


                transporter.capiMessageHandler(badValueChangeMsg);
                
                // verify that nothing was updated
                expect(failed).to.be(false);
            });

            it('should ignore VALUE_CHANGE when authToken does not match', function(){

                // create a bad value change message with values = undefined
                var badValueChangeMsg = new SimCapiMessage({
                    type : SimCapiMessage.TYPES.VALUE_CHANGE,
                    handshake : {
                        requestToken : requestToken,
                        authToken : 'bad auth token'
                    },
                    values : undefined
                });

                var failed = false;
                transporter.addChangeListener(function(values){
                  failed = true;
                });

                transporter.capiMessageHandler(badValueChangeMsg);
                
                // verify that nothing was updated
                expect(failed).to.be(false);
            });

            it('should not update readonly values', function(){

                var valueChangeMsg = createGoodValueChangeMessage();

                // change attr2 to be readonly
                outgoingMap.attr2.readonly = true;

                transporter.addChangeListener(function(values){
                  //verify that two attrs get updated
                  expect(values.length).to.be(2);
                });

                transporter.capiMessageHandler(valueChangeMsg);

            });

        });
        
        describe('VALUE_CHANGE_REQUEST', function(){
          
            // process change event
            var valueChangeRequestMessage = new SimCapiMessage({
                type : SimCapiMessage.TYPES.VALUE_CHANGE_REQUEST,
                handshake : {
                    authToken : authToken
                }
            });
  
            it('should send value change notification', function(){
                doHandShake();
                sandbox.stub(transporter, 'notifyValueChange', function () {});
                transporter.capiMessageHandler(valueChangeRequestMessage);
                expect(transporter.notifyValueChange.called).to.be(true);
            });

        });

        describe('CHECK_*', function() {
            var checkResponseMessage = new SimCapiMessage({
                type : SimCapiMessage.TYPES.CHECK_RESPONSE,
                handshake : {
                    authToken : authToken
                }
            });

            it('should trigger check completion callback', function() {
                doHandShake();
                var onComplete = sandbox.stub();

                // trigger check
                transporter.triggerCheck({
                    complete : onComplete
                });

                transporter.capiMessageHandler(checkResponseMessage);
                expect(onComplete.called).to.be(true);
            });
        });

    });

});