import {jobDetail} from'./data.js'


function changeDataInHtml (selector, data) {
    document.querySelector(selector).textContent = data;
}


/*
changeDataInHtml("h1", me.lastName + ' ' + me.firstName);
changeDataInHtml("#age", me.age);
changeDataInHtml("#ville", me.adress);
changeDataInHtml("#mail", me.mail);
changeDataInHtml(".diploma", me.diplomes[0]);
changeDataInHtml(".diploma1", me.diplomes[1]);
changeDataInHtml(".form", me.formation[0]);
changeDataInHtml(".form1", me.formation[1]);
changeDataInHtml(".form2", me.formation[2]);
changeDataInHtml(".code", me.codes[0]);
changeDataInHtml(".code1", me.codes[1]);
changeDataInHtml(".code2", me.codes[2]);
changeDataInHtml(".code3", me.codes[3]);
changeDataInHtml(".code4", me.codes[4]);
changeDataInHtml(".hobbie", me.hobbies[0]);
changeDataInHtml(".hobbie1", me.hobbies[1]);
changeDataInHtml(".hobbie2", me.hobbies[2]);
changeDataInHtml(".hobbie3", me.hobbies[3]);
changeDataInHtml(".hobbie4", me.hobbies[4]);


 */





jobDetail.forEach((value, key) => {
    changeDataInHtml(key, value);
});

