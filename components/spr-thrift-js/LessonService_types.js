//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

AggregateFunction = {
'SUM' : 1,
'COUNT' : 2,
'MAX' : 3,
'NONE' : 4
};
TrapStateTransitionSummary = function(args) {
  this.outEdges = null;
  if (args) {
    if (args.outEdges !== undefined) {
      this.outEdges = args.outEdges;
    }
  }
};
TrapStateTransitionSummary.prototype = {};
TrapStateTransitionSummary.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.outEdges = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          if (_i5 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key6 = null;
          var val7 = null;
          key6 = input.readString().value;
          val7 = input.readI32().value;
          this.outEdges[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TrapStateTransitionSummary.prototype.write = function(output) {
  output.writeStructBegin('TrapStateTransitionSummary');
  if (this.outEdges) {
    output.writeFieldBegin('outEdges', Thrift.Type.MAP, 1);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.I32, Thrift.objectLength(this.outEdges));
    for (var kiter8 in this.outEdges)
    {
      if (this.outEdges.hasOwnProperty(kiter8))
      {
        var viter9 = this.outEdges[kiter8];
        output.writeString(kiter8);
        output.writeI32(viter9);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TrapStateAttemptSummary = function(args) {
  this.transitions = null;
  if (args) {
    if (args.transitions !== undefined) {
      this.transitions = args.transitions;
    }
  }
};
TrapStateAttemptSummary.prototype = {};
TrapStateAttemptSummary.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.MAP) {
        var _size10 = 0;
        var _rtmp314;
        this.transitions = {};
        var _ktype11 = 0;
        var _vtype12 = 0;
        _rtmp314 = input.readMapBegin();
        _ktype11 = _rtmp314.ktype;
        _vtype12 = _rtmp314.vtype;
        _size10 = _rtmp314.size;
        for (var _i15 = 0; _i15 < _size10; ++_i15)
        {
          if (_i15 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key16 = null;
          var val17 = null;
          key16 = input.readString().value;
          val17 = new TrapStateTransitionSummary();
          val17.read(input);
          this.transitions[key16] = val17;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TrapStateAttemptSummary.prototype.write = function(output) {
  output.writeStructBegin('TrapStateAttemptSummary');
  if (this.transitions) {
    output.writeFieldBegin('transitions', Thrift.Type.MAP, 1);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, Thrift.objectLength(this.transitions));
    for (var kiter18 in this.transitions)
    {
      if (this.transitions.hasOwnProperty(kiter18))
      {
        var viter19 = this.transitions[kiter18];
        output.writeString(kiter18);
        viter19.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TrapStateSummary = function(args) {
  this.trapStateIds = null;
  this.maxAttempts = null;
  this.attempts = null;
  if (args) {
    if (args.trapStateIds !== undefined) {
      this.trapStateIds = args.trapStateIds;
    }
    if (args.maxAttempts !== undefined) {
      this.maxAttempts = args.maxAttempts;
    }
    if (args.attempts !== undefined) {
      this.attempts = args.attempts;
    }
  }
};
TrapStateSummary.prototype = {};
TrapStateSummary.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.SET) {
        var _size20 = 0;
        var _rtmp324;
        this.trapStateIds = [];
        var _etype23 = 0;
        _rtmp324 = input.readSetBegin();
        _etype23 = _rtmp324.etype;
        _size20 = _rtmp324.size;
        for (var _i25 = 0; _i25 < _size20; ++_i25)
        {
          var elem26 = null;
          elem26 = input.readString().value;
          this.trapStateIds.push(elem26);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.maxAttempts = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size27 = 0;
        var _rtmp331;
        this.attempts = [];
        var _etype30 = 0;
        _rtmp331 = input.readListBegin();
        _etype30 = _rtmp331.etype;
        _size27 = _rtmp331.size;
        for (var _i32 = 0; _i32 < _size27; ++_i32)
        {
          var elem33 = null;
          elem33 = new TrapStateAttemptSummary();
          elem33.read(input);
          this.attempts.push(elem33);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TrapStateSummary.prototype.write = function(output) {
  output.writeStructBegin('TrapStateSummary');
  if (this.trapStateIds) {
    output.writeFieldBegin('trapStateIds', Thrift.Type.SET, 1);
    output.writeSetBegin(Thrift.Type.STRING, this.trapStateIds.length);
    for (var iter34 in this.trapStateIds)
    {
      if (this.trapStateIds.hasOwnProperty(iter34))
      {
        iter34 = this.trapStateIds[iter34];
        output.writeString(iter34);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.maxAttempts) {
    output.writeFieldBegin('maxAttempts', Thrift.Type.I32, 2);
    output.writeI32(this.maxAttempts);
    output.writeFieldEnd();
  }
  if (this.attempts) {
    output.writeFieldBegin('attempts', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.attempts.length);
    for (var iter35 in this.attempts)
    {
      if (this.attempts.hasOwnProperty(iter35))
      {
        iter35 = this.attempts[iter35];
        iter35.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CAPIRankStats = function(args) {
  this.min = null;
  this.lowerQuartile = null;
  this.median = null;
  this.upperQuartile = null;
  this.max = null;
  this.mean = null;
  this.count = null;
  if (args) {
    if (args.min !== undefined) {
      this.min = args.min;
    }
    if (args.lowerQuartile !== undefined) {
      this.lowerQuartile = args.lowerQuartile;
    }
    if (args.median !== undefined) {
      this.median = args.median;
    }
    if (args.upperQuartile !== undefined) {
      this.upperQuartile = args.upperQuartile;
    }
    if (args.max !== undefined) {
      this.max = args.max;
    }
    if (args.mean !== undefined) {
      this.mean = args.mean;
    }
    if (args.count !== undefined) {
      this.count = args.count;
    }
  }
};
CAPIRankStats.prototype = {};
CAPIRankStats.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.DOUBLE) {
        this.min = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.lowerQuartile = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.DOUBLE) {
        this.median = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.upperQuartile = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.DOUBLE) {
        this.max = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.DOUBLE) {
        this.mean = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.count = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CAPIRankStats.prototype.write = function(output) {
  output.writeStructBegin('CAPIRankStats');
  if (this.min) {
    output.writeFieldBegin('min', Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.min);
    output.writeFieldEnd();
  }
  if (this.lowerQuartile) {
    output.writeFieldBegin('lowerQuartile', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.lowerQuartile);
    output.writeFieldEnd();
  }
  if (this.median) {
    output.writeFieldBegin('median', Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.median);
    output.writeFieldEnd();
  }
  if (this.upperQuartile) {
    output.writeFieldBegin('upperQuartile', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.upperQuartile);
    output.writeFieldEnd();
  }
  if (this.max) {
    output.writeFieldBegin('max', Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.max);
    output.writeFieldEnd();
  }
  if (this.mean) {
    output.writeFieldBegin('mean', Thrift.Type.DOUBLE, 6);
    output.writeDouble(this.mean);
    output.writeFieldEnd();
  }
  if (this.count) {
    output.writeFieldBegin('count', Thrift.Type.I32, 7);
    output.writeI32(this.count);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CAPICategoryStats = function(args) {
  this.categoryCounts = null;
  this.count = null;
  if (args) {
    if (args.categoryCounts !== undefined) {
      this.categoryCounts = args.categoryCounts;
    }
    if (args.count !== undefined) {
      this.count = args.count;
    }
  }
};
CAPICategoryStats.prototype = {};
CAPICategoryStats.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.MAP) {
        var _size36 = 0;
        var _rtmp340;
        this.categoryCounts = {};
        var _ktype37 = 0;
        var _vtype38 = 0;
        _rtmp340 = input.readMapBegin();
        _ktype37 = _rtmp340.ktype;
        _vtype38 = _rtmp340.vtype;
        _size36 = _rtmp340.size;
        for (var _i41 = 0; _i41 < _size36; ++_i41)
        {
          if (_i41 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key42 = null;
          var val43 = null;
          key42 = input.readString().value;
          val43 = input.readI32().value;
          this.categoryCounts[key42] = val43;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.count = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CAPICategoryStats.prototype.write = function(output) {
  output.writeStructBegin('CAPICategoryStats');
  if (this.categoryCounts) {
    output.writeFieldBegin('categoryCounts', Thrift.Type.MAP, 1);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.I32, Thrift.objectLength(this.categoryCounts));
    for (var kiter44 in this.categoryCounts)
    {
      if (this.categoryCounts.hasOwnProperty(kiter44))
      {
        var viter45 = this.categoryCounts[kiter44];
        output.writeString(kiter44);
        output.writeI32(viter45);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.count) {
    output.writeFieldBegin('count', Thrift.Type.I32, 2);
    output.writeI32(this.count);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CAPIQuery = function(args) {
  this.lessonId = null;
  this.questions = null;
  this.capiExpressions = null;
  this.questionResult = null;
  if (args) {
    if (args.lessonId !== undefined) {
      this.lessonId = args.lessonId;
    }
    if (args.questions !== undefined) {
      this.questions = args.questions;
    }
    if (args.capiExpressions !== undefined) {
      this.capiExpressions = args.capiExpressions;
    }
    if (args.questionResult !== undefined) {
      this.questionResult = args.questionResult;
    }
  }
};
CAPIQuery.prototype = {};
CAPIQuery.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.lessonId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size46 = 0;
        var _rtmp350;
        this.questions = [];
        var _etype49 = 0;
        _rtmp350 = input.readListBegin();
        _etype49 = _rtmp350.etype;
        _size46 = _rtmp350.size;
        for (var _i51 = 0; _i51 < _size46; ++_i51)
        {
          var elem52 = null;
          elem52 = input.readString().value;
          this.questions.push(elem52);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size53 = 0;
        var _rtmp357;
        this.capiExpressions = [];
        var _etype56 = 0;
        _rtmp357 = input.readListBegin();
        _etype56 = _rtmp357.etype;
        _size53 = _rtmp357.size;
        for (var _i58 = 0; _i58 < _size53; ++_i58)
        {
          var elem59 = null;
          elem59 = input.readString().value;
          this.capiExpressions.push(elem59);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.questionResult = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CAPIQuery.prototype.write = function(output) {
  output.writeStructBegin('CAPIQuery');
  if (this.lessonId) {
    output.writeFieldBegin('lessonId', Thrift.Type.STRING, 1);
    output.writeString(this.lessonId);
    output.writeFieldEnd();
  }
  if (this.questions) {
    output.writeFieldBegin('questions', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.questions.length);
    for (var iter60 in this.questions)
    {
      if (this.questions.hasOwnProperty(iter60))
      {
        iter60 = this.questions[iter60];
        output.writeString(iter60);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.capiExpressions) {
    output.writeFieldBegin('capiExpressions', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.capiExpressions.length);
    for (var iter61 in this.capiExpressions)
    {
      if (this.capiExpressions.hasOwnProperty(iter61))
      {
        iter61 = this.capiExpressions[iter61];
        output.writeString(iter61);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.questionResult) {
    output.writeFieldBegin('questionResult', Thrift.Type.BOOL, 4);
    output.writeBool(this.questionResult);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CAPIValue = function(args) {
  this.stringValue = null;
  this.intValue = null;
  this.doubleValue = null;
  this.boolValue = null;
  if (args) {
    if (args.stringValue !== undefined) {
      this.stringValue = args.stringValue;
    }
    if (args.intValue !== undefined) {
      this.intValue = args.intValue;
    }
    if (args.doubleValue !== undefined) {
      this.doubleValue = args.doubleValue;
    }
    if (args.boolValue !== undefined) {
      this.boolValue = args.boolValue;
    }
  }
};
CAPIValue.prototype = {};
CAPIValue.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.stringValue = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.intValue = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.DOUBLE) {
        this.doubleValue = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.boolValue = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CAPIValue.prototype.write = function(output) {
  output.writeStructBegin('CAPIValue');
  if (this.stringValue) {
    output.writeFieldBegin('stringValue', Thrift.Type.STRING, 1);
    output.writeString(this.stringValue);
    output.writeFieldEnd();
  }
  if (this.intValue) {
    output.writeFieldBegin('intValue', Thrift.Type.I32, 2);
    output.writeI32(this.intValue);
    output.writeFieldEnd();
  }
  if (this.doubleValue) {
    output.writeFieldBegin('doubleValue', Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.doubleValue);
    output.writeFieldEnd();
  }
  if (this.boolValue) {
    output.writeFieldBegin('boolValue', Thrift.Type.BOOL, 4);
    output.writeBool(this.boolValue);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CAPIRecord = function(args) {
  this.interactionId = null;
  this.lessonId = null;
  this.questionId = null;
  this.userId = null;
  this.serverTime = null;
  this.path = null;
  this.values = null;
  this.attempt = null;
  this.tutorialAttempt = null;
  this.questionResult = null;
  this.questionScore = null;
  if (args) {
    if (args.interactionId !== undefined) {
      this.interactionId = args.interactionId;
    }
    if (args.lessonId !== undefined) {
      this.lessonId = args.lessonId;
    }
    if (args.questionId !== undefined) {
      this.questionId = args.questionId;
    }
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.serverTime !== undefined) {
      this.serverTime = args.serverTime;
    }
    if (args.path !== undefined) {
      this.path = args.path;
    }
    if (args.values !== undefined) {
      this.values = args.values;
    }
    if (args.attempt !== undefined) {
      this.attempt = args.attempt;
    }
    if (args.tutorialAttempt !== undefined) {
      this.tutorialAttempt = args.tutorialAttempt;
    }
    if (args.questionResult !== undefined) {
      this.questionResult = args.questionResult;
    }
    if (args.questionScore !== undefined) {
      this.questionScore = args.questionScore;
    }
  }
};
CAPIRecord.prototype = {};
CAPIRecord.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.interactionId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.lessonId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.questionId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.userId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.serverTime = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.path = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.LIST) {
        var _size62 = 0;
        var _rtmp366;
        this.values = [];
        var _etype65 = 0;
        _rtmp366 = input.readListBegin();
        _etype65 = _rtmp366.etype;
        _size62 = _rtmp366.size;
        for (var _i67 = 0; _i67 < _size62; ++_i67)
        {
          var elem68 = null;
          elem68 = new CAPIValue();
          elem68.read(input);
          this.values.push(elem68);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.attempt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I32) {
        this.tutorialAttempt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.BOOL) {
        this.questionResult = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.DOUBLE) {
        this.questionScore = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CAPIRecord.prototype.write = function(output) {
  output.writeStructBegin('CAPIRecord');
  if (this.interactionId) {
    output.writeFieldBegin('interactionId', Thrift.Type.STRING, 1);
    output.writeString(this.interactionId);
    output.writeFieldEnd();
  }
  if (this.lessonId) {
    output.writeFieldBegin('lessonId', Thrift.Type.STRING, 2);
    output.writeString(this.lessonId);
    output.writeFieldEnd();
  }
  if (this.questionId) {
    output.writeFieldBegin('questionId', Thrift.Type.STRING, 3);
    output.writeString(this.questionId);
    output.writeFieldEnd();
  }
  if (this.userId) {
    output.writeFieldBegin('userId', Thrift.Type.STRING, 4);
    output.writeString(this.userId);
    output.writeFieldEnd();
  }
  if (this.serverTime) {
    output.writeFieldBegin('serverTime', Thrift.Type.I64, 5);
    output.writeI64(this.serverTime);
    output.writeFieldEnd();
  }
  if (this.path) {
    output.writeFieldBegin('path', Thrift.Type.STRING, 6);
    output.writeString(this.path);
    output.writeFieldEnd();
  }
  if (this.values) {
    output.writeFieldBegin('values', Thrift.Type.LIST, 7);
    output.writeListBegin(Thrift.Type.STRUCT, this.values.length);
    for (var iter69 in this.values)
    {
      if (this.values.hasOwnProperty(iter69))
      {
        iter69 = this.values[iter69];
        iter69.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.attempt) {
    output.writeFieldBegin('attempt', Thrift.Type.I32, 8);
    output.writeI32(this.attempt);
    output.writeFieldEnd();
  }
  if (this.tutorialAttempt) {
    output.writeFieldBegin('tutorialAttempt', Thrift.Type.I32, 9);
    output.writeI32(this.tutorialAttempt);
    output.writeFieldEnd();
  }
  if (this.questionResult) {
    output.writeFieldBegin('questionResult', Thrift.Type.BOOL, 10);
    output.writeBool(this.questionResult);
    output.writeFieldEnd();
  }
  if (this.questionScore) {
    output.writeFieldBegin('questionScore', Thrift.Type.DOUBLE, 11);
    output.writeDouble(this.questionScore);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

EnrolmentInfo = function(args) {
  this.enrolmentId = null;
  this.userId = null;
  this.lessonId = null;
  this.email = null;
  this.givenName = null;
  this.surname = null;
  this.score = null;
  this.finished = null;
  if (args) {
    if (args.enrolmentId !== undefined) {
      this.enrolmentId = args.enrolmentId;
    }
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.lessonId !== undefined) {
      this.lessonId = args.lessonId;
    }
    if (args.email !== undefined) {
      this.email = args.email;
    }
    if (args.givenName !== undefined) {
      this.givenName = args.givenName;
    }
    if (args.surname !== undefined) {
      this.surname = args.surname;
    }
    if (args.score !== undefined) {
      this.score = args.score;
    }
    if (args.finished !== undefined) {
      this.finished = args.finished;
    }
  }
};
EnrolmentInfo.prototype = {};
EnrolmentInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.enrolmentId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.userId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.lessonId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.givenName = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.surname = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.DOUBLE) {
        this.score = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.BOOL) {
        this.finished = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EnrolmentInfo.prototype.write = function(output) {
  output.writeStructBegin('EnrolmentInfo');
  if (this.enrolmentId) {
    output.writeFieldBegin('enrolmentId', Thrift.Type.STRING, 1);
    output.writeString(this.enrolmentId);
    output.writeFieldEnd();
  }
  if (this.userId) {
    output.writeFieldBegin('userId', Thrift.Type.STRING, 2);
    output.writeString(this.userId);
    output.writeFieldEnd();
  }
  if (this.lessonId) {
    output.writeFieldBegin('lessonId', Thrift.Type.STRING, 3);
    output.writeString(this.lessonId);
    output.writeFieldEnd();
  }
  if (this.email) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 4);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.givenName) {
    output.writeFieldBegin('givenName', Thrift.Type.STRING, 5);
    output.writeString(this.givenName);
    output.writeFieldEnd();
  }
  if (this.surname) {
    output.writeFieldBegin('surname', Thrift.Type.STRING, 6);
    output.writeString(this.surname);
    output.writeFieldEnd();
  }
  if (this.score) {
    output.writeFieldBegin('score', Thrift.Type.DOUBLE, 7);
    output.writeDouble(this.score);
    output.writeFieldEnd();
  }
  if (this.finished) {
    output.writeFieldBegin('finished', Thrift.Type.BOOL, 8);
    output.writeBool(this.finished);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ProgressPoint = function(args) {
  this.lessonId = null;
  this.userId = null;
  this.questionId = null;
  this.questionScore = null;
  this.tutorialScore = null;
  this.finished = null;
  this.attempt = null;
  this.tutorialAttempt = null;
  this.lastInteractionTime = null;
  if (args) {
    if (args.lessonId !== undefined) {
      this.lessonId = args.lessonId;
    }
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.questionId !== undefined) {
      this.questionId = args.questionId;
    }
    if (args.questionScore !== undefined) {
      this.questionScore = args.questionScore;
    }
    if (args.tutorialScore !== undefined) {
      this.tutorialScore = args.tutorialScore;
    }
    if (args.finished !== undefined) {
      this.finished = args.finished;
    }
    if (args.attempt !== undefined) {
      this.attempt = args.attempt;
    }
    if (args.tutorialAttempt !== undefined) {
      this.tutorialAttempt = args.tutorialAttempt;
    }
    if (args.lastInteractionTime !== undefined) {
      this.lastInteractionTime = args.lastInteractionTime;
    }
  }
};
ProgressPoint.prototype = {};
ProgressPoint.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.lessonId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.userId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.questionId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.questionScore = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.DOUBLE) {
        this.tutorialScore = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.BOOL) {
        this.finished = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.attempt = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I64) {
        this.tutorialAttempt = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I64) {
        this.lastInteractionTime = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ProgressPoint.prototype.write = function(output) {
  output.writeStructBegin('ProgressPoint');
  if (this.lessonId) {
    output.writeFieldBegin('lessonId', Thrift.Type.STRING, 1);
    output.writeString(this.lessonId);
    output.writeFieldEnd();
  }
  if (this.userId) {
    output.writeFieldBegin('userId', Thrift.Type.STRING, 2);
    output.writeString(this.userId);
    output.writeFieldEnd();
  }
  if (this.questionId) {
    output.writeFieldBegin('questionId', Thrift.Type.STRING, 3);
    output.writeString(this.questionId);
    output.writeFieldEnd();
  }
  if (this.questionScore) {
    output.writeFieldBegin('questionScore', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.questionScore);
    output.writeFieldEnd();
  }
  if (this.tutorialScore) {
    output.writeFieldBegin('tutorialScore', Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.tutorialScore);
    output.writeFieldEnd();
  }
  if (this.finished) {
    output.writeFieldBegin('finished', Thrift.Type.BOOL, 6);
    output.writeBool(this.finished);
    output.writeFieldEnd();
  }
  if (this.attempt) {
    output.writeFieldBegin('attempt', Thrift.Type.I64, 7);
    output.writeI64(this.attempt);
    output.writeFieldEnd();
  }
  if (this.tutorialAttempt) {
    output.writeFieldBegin('tutorialAttempt', Thrift.Type.I64, 8);
    output.writeI64(this.tutorialAttempt);
    output.writeFieldEnd();
  }
  if (this.lastInteractionTime) {
    output.writeFieldBegin('lastInteractionTime', Thrift.Type.I64, 9);
    output.writeI64(this.lastInteractionTime);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
