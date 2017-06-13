const user = {
    id : 5,
    age: 33,
    firstName: 'John',
    lastName: 'Bubble',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};
const now = new Date();
const userClassName = "user-info";
const styleObj = {
    color:'red',
    fontFamily:'Verdana'
};
ReactDOM.render(
    <div className={userClassName}  style={styleObj} id={user.id} >
        <p>Полное имя: {user.getFullName()}</p>
        <p>Возраст: {user.age}</p>
        <p>Год рождения: {now.getFullYear() - user.age}</p>
        <p>Время генерации данных: {now.toLocaleTimeString()}</p>
    </div>,
    document.getElementById("container")
);