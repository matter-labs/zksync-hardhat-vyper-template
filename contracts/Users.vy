struct User: 
    name: String[100] 
    created: uint256 
    
users: HashMap[int128, User]
nextUserId: int128 
@external 
def __init__(): 
    self.nextUserId = 0 
@external 
def create_user(_name: String[100]): 
    nid : int128 = self.nextUserId 
    self.users[nid] = User({name: _name, created: block.timestamp}) 
    self.nextUserId = nid + 1 

@external 
def read_user(_id: int128) -> (String[100], uint256): 
    return (self.users[_id].name, self.users[_id].created) 

@external 
def update_user(_id: int128, _name: String[100]): 
    self.users[_id].name = _name 
    
@external 
def delete_user(_id: int128): 
    self.users[_id].name = "" 
    self.users[_id].created = 0
