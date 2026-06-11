@echo off
title API Filmes - Apresentacao
color 0A

echo ========================================
echo      API FILMES - CRUD COMPLETO
echo ========================================
echo.
echo Verificando se o servidor esta rodando...
curl -s http://localhost:3000/movies >nul 2>&1
if %errorlevel% neq 0 (
    echo Servidor nao encontrado!
    echo Execute primeiro: npm start
    pause
    exit /b
)
echo Servidor OK!
echo.
pause

cls
echo ========================================
echo  1 - CRIAR FILME (POST /movies)
echo ========================================
echo.
echo curl -X POST http://localhost:3000/movies ^
echo   -H "Content-Type: application/json" ^
echo   -d "{\"title\":\"Matrix\",\"year\":1999,\"genre\":\"Ficcao\",\"director\":\"Wachowski\"}"
echo.
pause
curl -X POST http://localhost:3000/movies -H "Content-Type: application/json" -d "{\"title\":\"Matrix\",\"year\":1999,\"genre\":\"Ficcao\",\"director\":\"Wachowski\"}"
echo.
echo.
pause

cls
echo ========================================
echo  2 - LISTAR TODOS (GET /movies)
echo ========================================
echo.
echo curl http://localhost:3000/movies
echo.
pause
curl http://localhost:3000/movies
echo.
echo.
pause

cls
echo ========================================
echo  3 - BUSCAR POR ID (GET /movies/:id)
echo ========================================
echo.
echo curl http://localhost:3000/movies/1
echo.
pause
curl http://localhost:3000/movies/1
echo.
echo.
pause

cls
echo ========================================
echo  4 - ATUALIZAR (PUT /movies/:id)
echo ========================================
echo.
echo curl -X PUT http://localhost:3000/movies/1 ^
echo   -H "Content-Type: application/json" ^
echo   -d "{\"title\":\"Matrix Reloaded\",\"year\":2003}"
echo.
pause
curl -X PUT http://localhost:3000/movies/1 -H "Content-Type: application/json" -d "{\"title\":\"Matrix Reloaded\",\"year\":2003}"
echo.
echo.
pause

cls
echo ========================================
echo  5 - LISTAR APOS UPDATE (GET /movies)
echo ========================================
echo.
curl http://localhost:3000/movies
echo.
echo.
pause

cls
echo ========================================
echo  6 - DELETAR (DELETE /movies/:id)
echo ========================================
echo.
echo curl -X DELETE http://localhost:3000/movies/1
echo.
pause
curl -X DELETE http://localhost:3000/movies/1
echo.
echo.
pause

cls
echo ========================================
echo  7 - LISTAR APOS DELETE (GET /movies)
echo ========================================
echo.
curl http://localhost:3000/movies
echo.
echo.
echo ========================================
echo          APRESENTACAO FINALIZADA
echo ========================================
pause
