var myArray = [
    {
        'name':'Michael', 
        'age':'30', 
        'birthdate':'11/10/1989'
    },
    {
        'name':'Mila',
        'age':'32', 
        'birthdate':'10/1/1989'
    },
    {
        'name':'Paul', 
        'age':'29', 
        'birthdate':'10/14/1990'
    },
    {
        'name':'Dennis', 
        'age':'25', 
        'birthdate':'11/29/1993'
    },
    {
        'name':'Tim', 
        'age':'27', 
        'birthdate':'3/12/1991'
    },
    {
        'name':'Erik', 
        'age':'24', 
        'birthdate':'10/31/1995'
    },
]





//this snipper handles the order by ascending of name, age, and birthday
 $('th').on('click', function(){
     var column = $(this).data('colname')
     var order = $(this).data('order')
     var text = $(this).html()
     text = text.substring(0, text.length - 1);
     
     
     
     if (order == 'desc'){
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#9660'
     }else{
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#9650'
     }

    $(this).html(text)
    buildTable(myArray)
    })


   
 
    
// function buildTable(data){

//     var table = document.getElementById('myTable')

//     table.innerHTML = ''

//     for (var i = 0; i < data.length; i++){
//         var colname = `name-${i}`
//         var colage = `age-${i}`
//         var colbirth = `birth-${i}`

//         var row = `<tr>
//                         <td>${data[i].name}</td>
//                         <td>${data[i].age}</td>
//                         <td>${data[i].birthdate}</td>
//                    </tr>`
//         table.innerHTML += row
//     }

//     data.forEach((item, i) => {
//         var colname = `name-${i}`
//         var colage = `age-${i}`
//         var colbirth = `birth-${i}`

//         var row = `<tr>
//                         <td>${data[i].name}</td>
//                         <td>${data[i].age}</td>
//                         <td>${data[i].birthdate}</td>
//                    </tr>`
//         table.innerHTML += row
//     })
// }

//this jQuery to handle the event
$("#search-input").on("keyup", function() {

    //$(this) refers to the element that triggered the event
    //.val() retrieves the current value of the input field 
    let value = $(this).val()
    console.log(value);

    let data = searchTable(value, myArray)
    buildTable(data)
})

function searchTable(value, data) {

    let filteredData = [];

    data.forEach(function(item, i) {

        value = value.toLowerCase()
        let name = data[i].name.toLowerCase()

        if(name.includes(value)) {
            filteredData.push(data[i])
        }

    })
    return filteredData
}
buildTable(myArray)

function buildTable(data) {

    //
    let table = document.getElementById("myTable");

    //removes all rows , columns, and any other content within the table
    //need i clear muna ang table para sa pag respond ng events, mag bubuild ng bagong table every single change sa input field
    table.innerHTML = "";

    //lagyan ng laman ang table
    data.forEach((item, i) => {

        let row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthdate}</td>
                  </tr>`

        //add the rows to the table
        table.innerHTML += row;
    })
}



/*
//this jquery handles the event that will console log the current data table
$("#button").on("click", function() {

    //select the table rows
    let rows = $("#myTable").find("tr");

    //initialize an array to store table data 
    let tableData = [];

    //Iterate each table row
    rows.each(function() {
        
        //select the table cells in the current row
        let cells = $(this).find("td");

        //initialize an object to store cell data
        let rowData = {};

        //iterate over each table cell
        cells.each(function(index) {

            let tableFields = ["name", "age", "birthdate"];
            let key = tableFields[index];

            rowData[key] = $(this).text().trim();
        })

        //push the row data object to the table data array
        tableData.push(rowData);

    })

    //log the table data array in JSON format
    console.log(JSON.stringify(tableData));
})
*/