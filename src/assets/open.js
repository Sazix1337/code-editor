const fileObjects = document.querySelectorAll(".file");
const editor = document.createElement("textarea");

fileObjects.forEach(fileObject => {
    fileObject.addEventListener('click', () => {
        const saveButton = document.createElement('button');
        saveButton.id = "save";
        saveButton.classList.add(fileObject.textContent);
        editor.value = fs.readFileSync(path.join(__dirname, '..', fileObject.textContent));

        editor.classList.add('editor');
        document.body.appendChild(editor);
        document.body.appendChild(saveButton);
    });
});