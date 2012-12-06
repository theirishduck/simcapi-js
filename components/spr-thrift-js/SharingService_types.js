//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

LoopPermission = {
'VIEW' : 1,
'EDIT' : 2
};
LoopMember = function(args) {
  this.user = null;
  this.permission = null;
  if (args) {
    if (args.user !== undefined) {
      this.user = args.user;
    }
    if (args.permission !== undefined) {
      this.permission = args.permission;
    }
  }
};
LoopMember.prototype = {};
LoopMember.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.user = new User();
        this.user.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.permission = input.readI32().value;
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

LoopMember.prototype.write = function(output) {
  output.writeStructBegin('LoopMember');
  if (this.user) {
    output.writeFieldBegin('user', Thrift.Type.STRUCT, 1);
    this.user.write(output);
    output.writeFieldEnd();
  }
  if (this.permission) {
    output.writeFieldBegin('permission', Thrift.Type.I32, 2);
    output.writeI32(this.permission);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Loop = function(args) {
  this.id = null;
  this.name = null;
  this.description = null;
  this.owner = null;
  this.active = null;
  this.created = null;
  this.updated = null;
  this.deleted = null;
  this.members = null;
  this.lessons = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.description !== undefined) {
      this.description = args.description;
    }
    if (args.owner !== undefined) {
      this.owner = args.owner;
    }
    if (args.active !== undefined) {
      this.active = args.active;
    }
    if (args.created !== undefined) {
      this.created = args.created;
    }
    if (args.updated !== undefined) {
      this.updated = args.updated;
    }
    if (args.deleted !== undefined) {
      this.deleted = args.deleted;
    }
    if (args.members !== undefined) {
      this.members = args.members;
    }
    if (args.lessons !== undefined) {
      this.lessons = args.lessons;
    }
  }
};
Loop.prototype = {};
Loop.prototype.read = function(input) {
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
        this.id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.owner = new User();
        this.owner.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BOOL) {
        this.active = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.created = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.updated = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I64) {
        this.deleted = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.members = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new LoopMember();
          elem6.read(input);
          this.members.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.LIST) {
        var _size7 = 0;
        var _rtmp311;
        this.lessons = [];
        var _etype10 = 0;
        _rtmp311 = input.readListBegin();
        _etype10 = _rtmp311.etype;
        _size7 = _rtmp311.size;
        for (var _i12 = 0; _i12 < _size7; ++_i12)
        {
          var elem13 = null;
          elem13 = new Lesson();
          elem13.read(input);
          this.lessons.push(elem13);
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

Loop.prototype.write = function(output) {
  output.writeStructBegin('Loop');
  if (this.id) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.name) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.description) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.owner) {
    output.writeFieldBegin('owner', Thrift.Type.STRUCT, 4);
    this.owner.write(output);
    output.writeFieldEnd();
  }
  if (this.active) {
    output.writeFieldBegin('active', Thrift.Type.BOOL, 5);
    output.writeBool(this.active);
    output.writeFieldEnd();
  }
  if (this.created) {
    output.writeFieldBegin('created', Thrift.Type.I64, 6);
    output.writeI64(this.created);
    output.writeFieldEnd();
  }
  if (this.updated) {
    output.writeFieldBegin('updated', Thrift.Type.I64, 7);
    output.writeI64(this.updated);
    output.writeFieldEnd();
  }
  if (this.deleted) {
    output.writeFieldBegin('deleted', Thrift.Type.I64, 8);
    output.writeI64(this.deleted);
    output.writeFieldEnd();
  }
  if (this.members) {
    output.writeFieldBegin('members', Thrift.Type.LIST, 9);
    output.writeListBegin(Thrift.Type.STRUCT, this.members.length);
    for (var iter14 in this.members)
    {
      if (this.members.hasOwnProperty(iter14))
      {
        iter14 = this.members[iter14];
        iter14.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.lessons) {
    output.writeFieldBegin('lessons', Thrift.Type.LIST, 10);
    output.writeListBegin(Thrift.Type.STRUCT, this.lessons.length);
    for (var iter15 in this.lessons)
    {
      if (this.lessons.hasOwnProperty(iter15))
      {
        iter15 = this.lessons[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
