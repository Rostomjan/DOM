(() => {
    let students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            Img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];

    let table = document.createElement('table'),
        thead = table.createTHead(),
        tbody = table.createTBody(),
        theadRow = thead.insertRow(0),
        form = document.createElement('form'),
        name = document.createElement('input'),
        lastName = document.createElement('input'),
        email = document.createElement('input'),
        profile = document.createElement('input'),
        skills = document.createElement('input'),
        save = document.createElement('input'),
        cancel = document.createElement('input'),
        formGroup1 = document.createElement('div'),
        divCol1 = document.createElement('div'),
        controls = `<td><span class="glyphicon glyphicon-edit"></span>&nbsp;<span class="glyphicon glyphicon-trash"></span></td>`,
        container = document.getElementById('container');
    
    theadRow.innerHTML = `<th class="sorting">Student  <span class="glyphicon glyphicon-sort"></span></th>` +
                        `<th class="sorting">email  <span class="glyphicon glyphicon-sort"></span></th>` +
                        `<th>Profile picture</th><th>Skils</th><th>controls</th>`;
    table.className = 'table table-hover';
    table.appendChild(thead);
    table.appendChild(tbody);

    container.appendChild(table);
    container.insertBefore(form, table)

    form.className = 'form form-horizontal';
    formGroup1.className = 'form-group';
    divCol1.className = 'col-xs-4';
    let formGroup2 = formGroup1.cloneNode(true);
    let divCol2 = divCol1.cloneNode(true);
    let divCol3 = divCol1.cloneNode(true);
    let divCol4 = divCol1.cloneNode(false);
    let divCol5 = divCol1.cloneNode(false);
    divCol1.appendChild(name);
    divCol2.appendChild(lastName);
    divCol3.appendChild(email);
    formGroup1.appendChild(divCol1);
    formGroup1.appendChild(divCol2);
    formGroup1.appendChild(divCol3);

    divCol4.className = 'col-xs-8';
    divCol4.appendChild(profile);
    divCol5.className = 'col-xs-4';
    divCol5.appendChild(skills);
    formGroup2.appendChild(divCol4);
    formGroup2.appendChild(divCol5);    

    form.appendChild(formGroup1);
    form.appendChild(formGroup2);    
    form.appendChild(save);
    form.appendChild(cancel);

    let inputs = document.querySelectorAll('input');
    let placeholderOptions = {
        name: 'First name',
        lastName: 'Last name',
        email: 'Email address',
        img: 'Image URL',
        skills: 'Skill set'
    };
    
    name.setAttribute('type', 'text');
    name.setAttribute('name', 'name');
    name.required = true;
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('name', 'lastName');
    lastName.required = true;
    email.setAttribute('type', 'email');
    email.setAttribute('name', 'email');
    email.required = true;
    email.pattern = '^[\.0-9a-zA-Z-_\$#]+@[\.0-9a-zA-Z-_\$#]+\.[a-zA-Z]{2,5}';
    profile.setAttribute('type', 'url');
    profile.setAttribute('name', 'img');
    profile.required = true;
    skills.setAttribute('type', 'text');
    skills.setAttribute('name', 'skills');
    skills.pattern = '[0-9a-zA-Z]+(,[0-9a-zA-Z]+)*';
    save.setAttribute('type', 'button');    
    save.setAttribute('value', 'Save');
    save.className = 'btn btn-primary';
    cancel.setAttribute('type', 'reset');
    cancel.setAttribute('value', 'Cancel');
    cancel.className = 'btn btn-warning';

    inputs.forEach((el) => {
        if (el.type !== 'button' && el.type !== 'reset') {
            el.className = 'form-control';
            el.placeholder = placeholderOptions[el.name];
        }
    });
    
    // Displaying students from the array
    let showTable = () => {
        students.forEach((student) => {
            let tbodyRow = tbody.insertRow(-1);
            tbodyRow.insertCell(-1).innerHTML = `${student.name} ${student.lastName}`;
            tbodyRow.insertCell(-1).innerHTML = `${student.email}`;
            tbodyRow.insertCell(-1).innerHTML = `<img src="${student.img}" alt="Picture" />`;
            tbodyRow.insertCell(-1).innerHTML = `${student.skills}`;
            tbodyRow.insertCell(-1).innerHTML = `${controls}`;
        });
    };

    // Adding student to the array and displaying in the table
    let addStudent = () => {
        let name = form.name.value;
        let lastName = form.lastName.value;
        let img = form.img.value;
        let email = form.email.value;
        let skills = form.skills.value;
        let newStudent = { name, lastName, img, email, skills };       

        if (!inputValidation()) {
            students.push(newStudent);
            let tbodyRow = tbody.insertRow(-1);
            tbodyRow.insertCell(-1).innerHTML = `${name} ${lastName}`;
            tbodyRow.insertCell(-1).innerHTML = `${email}`;
            tbodyRow.insertCell(-1).innerHTML = `<img src="${img}" alt="Picture" />`;
            tbodyRow.insertCell(-1).innerHTML = `${skills}`;
            tbodyRow.insertCell(-1).innerHTML = `${controls}`;
            form.reset();
        }
    };

    // Editing student's data
    let updateStudent = (e) => {
        if (e.target.className.includes('glyphicon-edit')) {
            e.stopPropagation();
            save.removeEventListener('click', addStudent);
            let index = e.target.parentNode.parentNode.rowIndex - 1;            
            let editStudent = tbody.childNodes[index].childNodes;
            form.name.value = editStudent[0].textContent.split(' ')[0];
            form.lastName.value = editStudent[0].textContent.split(' ')[1];
            form.email.value = editStudent[1].textContent;
            form.img.value = editStudent[2].childNodes[0].src;            
            form.skills.value = editStudent[3].textContent;

            // Returning default save button functionality if user clicks the delete button
            tbody.onclick = (e) => {
                if (e.target.className === 'glyphicon glyphicon-trash') {
                    save.onclick = '';
                    save.addEventListener('click', addStudent);                
                } 
            };
            // Updating student after filling in correct data
            save.onclick = () => {
                let edited = {
                    name: form.name.value,
                    lastName: form.lastName.value,
                    img: form.img.value,
                    email: form.email.value,
                    skills: form.skills.value
                };
                if (!inputValidation()) {
                    students.splice(index, 1, edited);                    
                    let arrValues = [(edited.name + ' ' + edited.lastName), edited.email, edited.img, edited.skills, controls];
                    tbody.childNodes[index].childNodes.forEach((item, i) => {
                        if (item.textContent !== arrValues[i] || (item.childNodes[0].src !== arrValues[i])) {
                            if (item.childNodes[0].nodeName === 'IMG') {                            
                                item.childNodes[0].src = arrValues[i];
                            } else {
                                item.innerHTML = arrValues[i];
                            }
                        }
                    });
                }
            };
            // Returning default save button functionality if user clicks the cancel button            
            cancel.onclick = () => {
                save.onclick = '';
                save.addEventListener('click', addStudent);
            };     
        }
    };

    // Removing student from array and table
    let deleteStudent = (e) => {
        if (e.target.className === 'glyphicon glyphicon-trash') {
            let index = e.target.parentNode.parentNode.rowIndex - 1;
            students.splice(index, 1);
            tbody.removeChild(tbody.childNodes[index]);      
        }
    };

    // Sorting table columns by ascending or descending order
    let sortColumn = (e) => {
        if (e.target.className.includes('glyphicon-sort') || e.target.className.includes('sorting')) {              
            let index = e.target.className.includes('sorting') ? e.target.cellIndex : e.target.parentNode.cellIndex;                     
            let switching, i, 
                count = 0,
                shiftFlag = true,
                order = 'asc',
                sortAsc = 'glyphicon glyphicon-sort-by-alphabet',
                sortDesc = 'glyphicon glyphicon-sort-by-alphabet-alt';
            e.target.className.includes('sorting') ? (e.target.lastChild.className = sortAsc) : (e.target.className = sortAsc);
        
            while (shiftFlag) {
                shiftFlag = false;
                let rows = tbody.getElementsByTagName('tr');
                // Go through all table rows and compare sibling rows
                for (i = 0; i < (rows.length - 1); i++) {
                    switching = false;
                    let current = rows[i].getElementsByTagName('td')[index];
                    let next = rows[i + 1].getElementsByTagName('td')[index];

                    if (order === 'asc' && (current.innerHTML.toLowerCase() > next.innerHTML.toLowerCase())) {
                        switching = true;
                        break;
                    } else if (order === 'desc' && (current.innerHTML.toLowerCase() < next.innerHTML.toLowerCase())) {
                        switching = true;
                        break;
                    }
                }
                if (switching) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    shiftFlag = true;
                    count ++;      
                } else {
                    // If the direction is ascending and no switching, set it to descending
                    if (order === 'asc' && count === 0) {
                        e.target.className.includes('sorting') ? (e.target.lastChild.className = sortDesc) : (e.target.className = sortDesc);
                        order = 'desc';
                        shiftFlag = true;
                    }
                }
            }
        }        
    };

    // Validating input data and inform if there are any errors
    let inputValidation = () => {
        let errorFlag = false;
        inputs.forEach((input) => {
            if (input.type !== 'button' && input.type !== 'reset') {
                if (input.checkValidity()) {
                    input.placeholder = placeholderOptions[input.name];
                    input.parentNode.classList.remove('has-error');
                    input.parentNode.classList.add('has-success');       
                } else {
                    errorFlag = true;
                    input.parentNode.classList.remove('has-success');
                    input.parentNode.classList.add('has-error');
                    if (input.type === 'email' && input.validity.patternMismatch) {
                        input.placeholder = 'Invalid email address'
                    } else {
                        input.placeholder = `${placeholderOptions[input.name]} Error: ${input.validationMessage}`;
                    }               
                }
            }
        });
         return errorFlag;     
    };

    let modal = document.createElement('div'),
        modalContent = modal.cloneNode(false),
        fullName = document.createElement('h2'),
        sdEmail = document.createElement('h4'),
        sdSkills = sdEmail.cloneNode(false),
        profileImg = document.createElement('img');
    
    modal.id = 'modal';
    modalContent.id = 'modal-content';
    modalContent.appendChild(fullName);
    modalContent.appendChild(profileImg);
    modalContent.appendChild(sdEmail);
    modalContent.appendChild(sdSkills);
    modal.appendChild(modalContent);
    container.appendChild(modal);  

    // Displaying the modal window with selected student after clicking to table's row
    let showStudent = (e) => {
        if (e.target.closest('tr')) {
            let index = e.target.closest('tr').rowIndex - 1;            
            let selected = tbody.childNodes[index].childNodes;
            fullName.textContent = selected[0].textContent;
            sdEmail.textContent = `Email: ${selected[1].textContent}`;
            profileImg.src = selected[2].childNodes[0].src;            
            sdSkills.textContent = `Skills: ${selected[3].textContent}`;
            modal.style.display = "block";

            // When the user clicks anywhere outside of the modal, close it
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });
        }
    };

    showTable();
    tbody.addEventListener('click', showStudent);
    save.addEventListener('click', addStudent);
    tbody.addEventListener('click', updateStudent, true);    
    tbody.addEventListener('click', deleteStudent, true);
    thead.addEventListener('click', sortColumn);
})();
