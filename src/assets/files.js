const fs = require('fs');
const path = require('path');
const filesObject = document.getElementById('files');
const files = fs.readdirSync(path.join(__dirname, '..'));

function setSpanText(obj, text, file) {
    const span = document.createElement('span');
    span.classList.add('name');
    span.id = file;
    span.textContent = text;
    obj.appendChild(span);
}

function setText($object, text) {
    $object.textContent = text;
}

function isDir(...path) {
    return fs.statSync(path.join(__dirname, ...path)).isDirectory();
}

const dirs = [];

files.forEach(file => {
    const fileObject = document.createElement("div");
    if(isDir(file)) {
        dirs.push(file);
        fileObject.classList.add("folder");
        fileObject.id = file;
        setSpanText(fileObject, `${file} >`, file);
    } else {
        fileObject.classList.add("file");
        setSpanText(fileObject, file, file);
    }
    
    filesObject.appendChild(fileObject);
});

const folders = document.querySelectorAll(".name");
folders.forEach(folder => {
    folder.addEventListener('click', () => {
        dirs.forEach(dir => {
            if(folder.id == dir) {
                folder.classList.toggle('open');
                if(folder.classList.contains('open')) {
                    setText(folder, `${dir} ^`);
                    const objects = fs.readdirSync(path.join(__dirname, '..', dir));
                    objects.forEach(file => {
                        const fileObject = document.createElement("div");
                        if(isDir(`${dir}/${file}`)) {
                            fileObject.classList.add("folder");
                            fileObject.id = file;
                            setSpanText(fileObject, `${file} >`, file);
                        } else {
                            fileObject.classList.add("file");
                            setSpanText(fileObject, file, file);
                        }
                    })
                } else {
                    setText(folder, `${dir} >`);
                }
            }
        })
    });
});