const http = require("http");

http
.createServer((request,response) => {
    response.writeHead(200, { "Content-Type":"application/json"});

    if(request.url === '/produto'){
        response.end(JSON.stringify({
            message:"Rota Produto",
        })
        );
    }

    if(request.url === '/usuario'){
        response.end(JSON.stringify({
            message:"Rota Usuario",
        })
        );
    }

    response.end(JSON.stringify({
        message: "Index!"
    })
    );

})
.listen(4001, () => console.log("Servidor está rodando na porta 4001!"));