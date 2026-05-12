import { Sequelize } from "sequelize";

const sequelize = new Sequelize('aula','root','senai',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

async function testConnection(){
    try{
        await sequelize.authenticate()
        console.log("conexão estabelecida com sucesso");
    }catch(error){
        console.error(`erro ao conectar: ${error}`)
    }
}

testConnection();

export default sequelize;