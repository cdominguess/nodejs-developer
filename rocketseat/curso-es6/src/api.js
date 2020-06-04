
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://api.github.com',
})

export default api;

/*class ConectarGithub {
    static async getDadosUsuario(usuario) {
        try {
            let retorno = await Axios.get(`https://api.github.com/users/${usuario}`);
            console.log(retorno);
        } catch (err) {
            console.warn(err);
        }
    }
};

ConectarGithub.getDadosUsuario('cdominguesss');*/