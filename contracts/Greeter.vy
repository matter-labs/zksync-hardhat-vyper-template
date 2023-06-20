# @version ^0.3.3
# vim: ft=python

owner: address
greeting: String[64]

@external
def __init__(_greeting: String[64]):
    """
    @dev Contract constructor.
    """
    self.owner = msg.sender
    self.greeting = _greeting


@view
@external
def greet() -> String[64]:
    return self.greeting


@external
def setGreeting(_greeting: String[64]):
    assert self.owner == msg.sender
    self.greeting = _greeting
