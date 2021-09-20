pragma solidity >=0.4.22 <0.8.0;
 contract Election{
     struct Party{
         string name;
         uint id;
         uint voteCount;
     }
     mapping(uint=> Party) public parties;
     mapping(address=> bool) public voters;
     
     uint public partycount;
    constructor() public{
            addParty('NDA');
            addParty('UPA');
            addParty('other');
     }
    function addParty(string memory _name) private{
        partycount++;
        parties[partycount]=Party(_name,partycount,0);
    }
    
    function vote(uint id,address add) public{
          require(!voters[add]);

        voters[add]=true;
            parties[id].voteCount++;
            voters[add]==true;
        
        
    }
 }
