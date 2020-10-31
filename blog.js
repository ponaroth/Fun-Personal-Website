let add_bt = document.getElementById("add_bt");
let myList = document.getElementById("myList");
let blogList = [];
let blogColumn = document.getElementById("blogColumn");

// populateBlogList();

// populate blogList with default blogs
// var populateBlogList = () => {
//     let blog1 = turnToBlog("Why Smaller Cars are More Fun Than Bigger Cars", 
//     "I have test drove serveral sport cars including the S550 Ford Mustang GT, the C7 Corvette Grand Sport, the Porshe 718 Cayman S, the Mercedez SLC 300, and the BMW M3. It was my dream to own a C7 Corvette some day. However, after driven the C7 Corvette and Porsche Cayman S back to back, I gained a new perspective. The C7 Corvette, which was the faster car, felt numb. I could not feel the enjoyment of acceleration while pushing it. The C7 was very fast. In fact, it could go past the speed limit in a blink of an eye. But there is no point if it could not put a smile on your face. The Cayman on the other hand put a smile on my face every time I floored it. It feels like a personal roller coaster.");

//     blogList.push(blog1);
// }


// 1. turn title and body text input into html 
var turnToBlog = (title, body) => {
    let h2 = "<h2 class='blogBG'>" + title + "</h2>";
    let p = "<p>"+ body + "</p>";
    let result = "<div>" + h2 + p + "<hr></div>";
    return result;
}

// 2. append blog and return all blogs in html 
var addBlogReturnAll = (title, body) => {
    let b = turnToBlog(title, body);
    blogList.unshift(b);
    let text = "";

    blogList.forEach(element => {
        text += element;
    });

    return text;
}

// 3. 
var addBlogToBlogColumn = () => {
    let title = document.getElementById("myInput");
    let blogBody = document.getElementById("blogBody");

    let titleText = title.value;
    let bodyText = blogBody.value;

    console.log(titleText, bodyText);
    let post = addBlogReturnAll(titleText, bodyText);
    blogColumn.innerHTML=post;

}   




