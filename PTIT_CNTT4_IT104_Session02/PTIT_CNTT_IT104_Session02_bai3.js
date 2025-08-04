const typeConsle = (type = "log") => {
    console[type](`đây là: ${type}`);
}
typeConsle();
typeConsle("warn");
typeConsle("error");    