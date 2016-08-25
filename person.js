/**
 * Created by v_jiangxiaoli on 2016/8/25.
 */
function Person(name){
    this.name = name;
}
Person.prototype.say = function () {
    console.log(this.name);
}
module.exports = Person;