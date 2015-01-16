// By id
function callExample1() {
    // alert('this works');
    $('#first').addClass('highlight1');
}

// By element  / tag
function callExample2() {
    $('p').addClass('highlight2');
}

// By class 
function callExample3() {
    $('.chosen').addClass('highlight3');
}

// By multiple selectors using coma operator
function callExample4() {
    $('#first, .chosen').addClass('highlight4');
}

// Contains operator
function callExample5() {
    $('li:contains("Three")').addClass('highlight5');
}

// Next / Prev 
function callExample6() {
    $('li:contains("Three")').next().addClass('highlight6');
    $('li:contains("Three")').prev().addClass('highlight6');
}

// Parents / sibling / Even / Odd
function callExample7() {
    $('li:contains("Three")').parent().addClass('highlight7');
    $('li:contains("Three")').siblings().addClass('highlight6');

    // Selecting by a emelent position. In this case the first LI element of all UL's
    // $('li:nth-child(1)').addClass('highlight6');

    // Select all even elements in UL
    // $('li:even').addClass('highlight6');

    // Select all odd elements in UL
    // $('li:odd').addClass('highlight6');
}

// Parents / sibling
function callExample8() {
    $('p[name="mySecondPara"]').addClass('highlight1');
    $('p[name!="mySecondPara"]').addClass('highlight2');
}

// Chaining / filtering
function callExample9() {
    // Select all paragraphs who does not have name attribute
    $('p').not('[name]').addClass('highlight3');
}

// Other special type of jQuery selector
function callExample10() {
    // all header elements
    $(':header').addClass('highlight4');
    // all empty paragraphs
    $('p:empty').addClass('highlight7');
    $('p:empty').text('Add text to empty text');
}

// Add selecto on the fly
function callExample11() {
    //$('body').append(
    $('#myDiv').append(
        $('<p>', {
            'class': 'foo',
            id: 'bar',
            html: "******** A new page tag is appended to the body on the fly. The tag uses class:foo, id:bar, and other CSS properties  ********",
            css: {
                color: 'white',
                background: 'blue',
                fontSize: '12pt'
            }
        })
    );
}
