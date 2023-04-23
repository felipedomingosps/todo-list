const createTodo = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};

const projects = () => {
    let allProjects = [];

    const addProject = (project) => {
        allProjects.push(project);
;    }

    const newProject = (name) => {
        return {
            name: name,
            todos: []
        };
    };

    const getProjectIndex = (name) => {
        return allProjects.findIndex(project => project.name = name);
    }

    const addTodoToProject = (todo, projectName) => {
        const projectIndex = getProjectIndex(projectName);
        allProjects[projectIndex].todos.push(todo);
    }

    return {newProject, addProject, addTodoToProject};
};