const option={
    name:'test',
    width: 1024,
    height: 1024,
    colors:{
        border:'black',
        background: 'red'
    }
}
console.log(option.name);
delete option.name;
console.log(option);