# Construção inicial
O começo da construção desta aplicação teve inicio com a construção dos containerês,
eles serão responsáveis por conectar aos bancos de dados, sendo eles o Mongo e Postgre,
com suas variáveis ambientes pré determinadas. E depois conclui isto com o container 
mais fundamental, o node que rodará a aplicação que é o arquivo "server.js".

# Aplicação

Sucedendo esta etapa está o desenvolvimento da parte da aplicação que o container executará ,
o arquivo javascript "server.js", seu container contém dependencias como o package.json que 
informa as versões determinadas e tambem o tipo de JS, o module.

# Estrutura

A estrutura é dividida em pastas e cada uma delas possui o arquivo DockerFile correspondente
ao nome da pasta, e no mesmo diretório destas pastas o arquivo isolado docker-compose.yml,
que irá orquestrar todas as imagens de todas as pastas e o Node em especial está ligado a pasta "app",
que contem o arquivo Javascript.


                     ____app-server.js
                    I____Mongo____DockerFile
CONTAINER-MPN ------I
                    I____Node_____DockerfILE
                    I____Postgre__DockerFile
                    

# Tecnologias em uso
# 1 Docker => Responsável por conteinirizar a aplicação.
# 2 Mongo => Banco de dados não estruturados formato JSON.
# 3 Postgre => Banco de dados relacionais.
# 4 Node => Compilador de Javascript separado do Browser Google.



# -------------------COMO USAR-----------------------#


# 1 - Tenha o docker instalado em seu dispositivo.

# 2 - Clone o repositório   e use o comando a seguir no terminal do Git Bash:

    ``Bash
        Git Clone 

    