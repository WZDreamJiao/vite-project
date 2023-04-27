// const modules = import.meta.glob("@/assets/icons/*.svg", { as: "raw" });
// for (const path in modules) {
//     modules[path]().then((mod) => {
//         console.log(path, mod);
//     });
// }
const modules = import.meta.glob("@/assets/icons/*.svg", { as: "raw",eager: true });

const getIcon = (name) => {
    if (modules[`/src/assets/icons/${name}.svg`]) {
        return modules[`/src/assets/icons/${name}.svg`].replace("<svg ", '<svg fill="currentColor" ')
    } else {
        return '<svg></svg>'
    }
};


export default getIcon