// this - pointer to an object

console.log(this);

var user = 'Gourav';
console.log(this.user);

function checkThis(){
    console.log(this);
}
checkThis();

const user1 = {
    userName : "Gourav",
    userAge : 24,

    work: function(){
        console.log(this);
    }
}
user1.work();

const user2 = {
    userName : "Keshav",
};

user2.work = user1.work;
console.log(user2);

user2.work();


const checkArrow = () => {
    console.log(this);
};