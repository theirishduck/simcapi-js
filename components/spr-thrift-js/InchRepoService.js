//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

InchRepoService_search_args = function(args) {
  this.authToken = null;
  this.endpoint = null;
  this.searchTerm = null;
  if (args) {
    if (args.authToken !== undefined) {
      this.authToken = args.authToken;
    }
    if (args.endpoint !== undefined) {
      this.endpoint = args.endpoint;
    }
    if (args.searchTerm !== undefined) {
      this.searchTerm = args.searchTerm;
    }
  }
};
InchRepoService_search_args.prototype = {};
InchRepoService_search_args.prototype.read = function(input) {
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
        this.authToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.endpoint = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.searchTerm = input.readString().value;
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

InchRepoService_search_args.prototype.write = function(output) {
  output.writeStructBegin('InchRepoService_search_args');
  if (this.authToken) {
    output.writeFieldBegin('authToken', Thrift.Type.STRING, 1);
    output.writeString(this.authToken);
    output.writeFieldEnd();
  }
  if (this.endpoint) {
    output.writeFieldBegin('endpoint', Thrift.Type.STRING, 2);
    output.writeString(this.endpoint);
    output.writeFieldEnd();
  }
  if (this.searchTerm) {
    output.writeFieldBegin('searchTerm', Thrift.Type.STRING, 3);
    output.writeString(this.searchTerm);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

InchRepoService_search_result = function(args) {
  this.success = null;
  this.aelpEx = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.aelpEx !== undefined) {
      this.aelpEx = args.aelpEx;
    }
  }
};
InchRepoService_search_result.prototype = {};
InchRepoService_search_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new InchRepoSearchResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.aelpEx = new AELPException();
        this.aelpEx.read(input);
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

InchRepoService_search_result.prototype.write = function(output) {
  output.writeStructBegin('InchRepoService_search_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.aelpEx) {
    output.writeFieldBegin('aelpEx', Thrift.Type.STRUCT, 1);
    this.aelpEx.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

InchRepoService_create_args = function(args) {
  this.authToken = null;
  this.endpoint = null;
  this.searchTerm = null;
  this.data = null;
  if (args) {
    if (args.authToken !== undefined) {
      this.authToken = args.authToken;
    }
    if (args.endpoint !== undefined) {
      this.endpoint = args.endpoint;
    }
    if (args.searchTerm !== undefined) {
      this.searchTerm = args.searchTerm;
    }
    if (args.data !== undefined) {
      this.data = args.data;
    }
  }
};
InchRepoService_create_args.prototype = {};
InchRepoService_create_args.prototype.read = function(input) {
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
        this.authToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.endpoint = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.searchTerm = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.data = input.readString().value;
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

InchRepoService_create_args.prototype.write = function(output) {
  output.writeStructBegin('InchRepoService_create_args');
  if (this.authToken) {
    output.writeFieldBegin('authToken', Thrift.Type.STRING, 1);
    output.writeString(this.authToken);
    output.writeFieldEnd();
  }
  if (this.endpoint) {
    output.writeFieldBegin('endpoint', Thrift.Type.STRING, 2);
    output.writeString(this.endpoint);
    output.writeFieldEnd();
  }
  if (this.searchTerm) {
    output.writeFieldBegin('searchTerm', Thrift.Type.STRING, 3);
    output.writeString(this.searchTerm);
    output.writeFieldEnd();
  }
  if (this.data) {
    output.writeFieldBegin('data', Thrift.Type.STRING, 4);
    output.writeString(this.data);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

InchRepoService_create_result = function(args) {
  this.success = null;
  this.aelpEx = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.aelpEx !== undefined) {
      this.aelpEx = args.aelpEx;
    }
  }
};
InchRepoService_create_result.prototype = {};
InchRepoService_create_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new RepoItem();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.aelpEx = new AELPException();
        this.aelpEx.read(input);
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

InchRepoService_create_result.prototype.write = function(output) {
  output.writeStructBegin('InchRepoService_create_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.aelpEx) {
    output.writeFieldBegin('aelpEx', Thrift.Type.STRUCT, 1);
    this.aelpEx.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

InchRepoService_listRepos_args = function(args) {
  this.authToken = null;
  if (args) {
    if (args.authToken !== undefined) {
      this.authToken = args.authToken;
    }
  }
};
InchRepoService_listRepos_args.prototype = {};
InchRepoService_listRepos_args.prototype.read = function(input) {
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
        this.authToken = input.readString().value;
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

InchRepoService_listRepos_args.prototype.write = function(output) {
  output.writeStructBegin('InchRepoService_listRepos_args');
  if (this.authToken) {
    output.writeFieldBegin('authToken', Thrift.Type.STRING, 1);
    output.writeString(this.authToken);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

InchRepoService_listRepos_result = function(args) {
  this.success = null;
  this.aelpEx = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.aelpEx !== undefined) {
      this.aelpEx = args.aelpEx;
    }
  }
};
InchRepoService_listRepos_result.prototype = {};
InchRepoService_listRepos_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.success = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new InchRepo();
          elem14.read(input);
          this.success.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.aelpEx = new AELPException();
        this.aelpEx.read(input);
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

InchRepoService_listRepos_result.prototype.write = function(output) {
  output.writeStructBegin('InchRepoService_listRepos_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter15 in this.success)
    {
      if (this.success.hasOwnProperty(iter15))
      {
        iter15 = this.success[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.aelpEx) {
    output.writeFieldBegin('aelpEx', Thrift.Type.STRUCT, 1);
    this.aelpEx.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

InchRepoService_itemsInRepo_args = function(args) {
  this.authToken = null;
  this.endpoint = null;
  if (args) {
    if (args.authToken !== undefined) {
      this.authToken = args.authToken;
    }
    if (args.endpoint !== undefined) {
      this.endpoint = args.endpoint;
    }
  }
};
InchRepoService_itemsInRepo_args.prototype = {};
InchRepoService_itemsInRepo_args.prototype.read = function(input) {
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
        this.authToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.endpoint = input.readString().value;
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

InchRepoService_itemsInRepo_args.prototype.write = function(output) {
  output.writeStructBegin('InchRepoService_itemsInRepo_args');
  if (this.authToken) {
    output.writeFieldBegin('authToken', Thrift.Type.STRING, 1);
    output.writeString(this.authToken);
    output.writeFieldEnd();
  }
  if (this.endpoint) {
    output.writeFieldBegin('endpoint', Thrift.Type.STRING, 2);
    output.writeString(this.endpoint);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

InchRepoService_itemsInRepo_result = function(args) {
  this.success = null;
  this.aelpEx = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.aelpEx !== undefined) {
      this.aelpEx = args.aelpEx;
    }
  }
};
InchRepoService_itemsInRepo_result.prototype = {};
InchRepoService_itemsInRepo_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new InchRepoSearchResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.aelpEx = new AELPException();
        this.aelpEx.read(input);
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

InchRepoService_itemsInRepo_result.prototype.write = function(output) {
  output.writeStructBegin('InchRepoService_itemsInRepo_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.aelpEx) {
    output.writeFieldBegin('aelpEx', Thrift.Type.STRUCT, 1);
    this.aelpEx.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

InchRepoServiceClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
InchRepoServiceClient.prototype = {};
InchRepoServiceClient.prototype.search = function(authToken, endpoint, searchTerm, callback) {
  if (callback === undefined) {
    this.send_search(authToken, endpoint, searchTerm);
    return this.recv_search();
  } else {
    var postData = this.send_search(authToken, endpoint, searchTerm, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_search);
  }
};

InchRepoServiceClient.prototype.send_search = function(authToken, endpoint, searchTerm, callback) {
  this.output.writeMessageBegin('search', Thrift.MessageType.CALL, this.seqid);
  var args = new InchRepoService_search_args();
  args.authToken = authToken;
  args.endpoint = endpoint;
  args.searchTerm = searchTerm;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

InchRepoServiceClient.prototype.recv_search = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new InchRepoService_search_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.aelpEx) {
    throw result.aelpEx;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'search failed: unknown result';
};
InchRepoServiceClient.prototype.create = function(authToken, endpoint, searchTerm, data, callback) {
  if (callback === undefined) {
    this.send_create(authToken, endpoint, searchTerm, data);
    return this.recv_create();
  } else {
    var postData = this.send_create(authToken, endpoint, searchTerm, data, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_create);
  }
};

InchRepoServiceClient.prototype.send_create = function(authToken, endpoint, searchTerm, data, callback) {
  this.output.writeMessageBegin('create', Thrift.MessageType.CALL, this.seqid);
  var args = new InchRepoService_create_args();
  args.authToken = authToken;
  args.endpoint = endpoint;
  args.searchTerm = searchTerm;
  args.data = data;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

InchRepoServiceClient.prototype.recv_create = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new InchRepoService_create_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.aelpEx) {
    throw result.aelpEx;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'create failed: unknown result';
};
InchRepoServiceClient.prototype.listRepos = function(authToken, callback) {
  if (callback === undefined) {
    this.send_listRepos(authToken);
    return this.recv_listRepos();
  } else {
    var postData = this.send_listRepos(authToken, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_listRepos);
  }
};

InchRepoServiceClient.prototype.send_listRepos = function(authToken, callback) {
  this.output.writeMessageBegin('listRepos', Thrift.MessageType.CALL, this.seqid);
  var args = new InchRepoService_listRepos_args();
  args.authToken = authToken;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

InchRepoServiceClient.prototype.recv_listRepos = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new InchRepoService_listRepos_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.aelpEx) {
    throw result.aelpEx;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'listRepos failed: unknown result';
};
InchRepoServiceClient.prototype.itemsInRepo = function(authToken, endpoint, callback) {
  if (callback === undefined) {
    this.send_itemsInRepo(authToken, endpoint);
    return this.recv_itemsInRepo();
  } else {
    var postData = this.send_itemsInRepo(authToken, endpoint, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_itemsInRepo);
  }
};

InchRepoServiceClient.prototype.send_itemsInRepo = function(authToken, endpoint, callback) {
  this.output.writeMessageBegin('itemsInRepo', Thrift.MessageType.CALL, this.seqid);
  var args = new InchRepoService_itemsInRepo_args();
  args.authToken = authToken;
  args.endpoint = endpoint;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

InchRepoServiceClient.prototype.recv_itemsInRepo = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new InchRepoService_itemsInRepo_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.aelpEx) {
    throw result.aelpEx;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'itemsInRepo failed: unknown result';
};