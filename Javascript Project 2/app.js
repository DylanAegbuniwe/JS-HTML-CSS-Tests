let data = [
    {
        name: 'Matero',
        age: '30'
    },
    {
        name: 'Felix',
        age: '32'
    },
    {
        name: 'Amy',
        age: '28'
    },
    {
        name: 'Lindsay',
        age: '31'
    },
    {
        name: 'Frank',
        age: '34'
    },
    {
        name: 'Dakota',
        age: '28'
    }
    
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' is ' + item.age + ' years old.' + '</div>';  
});

info.innerHTML = details.join('\n');