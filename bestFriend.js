const nameOfFriends = ['mahadi', 'akash', 'sowrava', 'sufu', 'minhazul', 'ikhtiyar bin bakhtiyar khilzi'];
function bestFriend(friends) {
    let jigriDost = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length > jigriDost.length) {
            jigriDost = friend;
        }
    }
    return jigriDost;
}
const closestFriend = bestFriend(nameOfFriends);
console.log(closestFriend);