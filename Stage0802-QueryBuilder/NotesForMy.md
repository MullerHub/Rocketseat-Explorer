RENOMEAR nomes de tabelas

ALTER TABLE ~nome da tabela~
RENAME TO ~nome novo~

---

Adicionar colunas na tabela

ALTER TABLE (nome da tabela)
ADD status VARCHAR

---

MUDAR nome de colunas na tabela

ALTER TABLE (nome da tabela)
RENAME COLUMN (nome da tabela) TO ~nome novo~

---



DELETAR coluna

ALTER TABLE ~nome da tabela~
DROP COLUMN ~nome da coluna~

---

---

SQL comandos DML (DATA MANIPULATION LANGUAGE)

C - CREATE = INSERT
R - READ = SELECT
U - UPDATE = UPDATE
D - DELETE = DELETE

---

MANIPULANDO DADOS BdeD (BANCO de DADOS)

INSERT INTO users
(name, email, password)

VALUES
('murilo', murilo@email.com, senha)

SELECT * FROM (nome do banco de dados); (*- asterisco serve pra selecionar todos dados)

SELECT id, name... FROM users; (especifica os dados a aparecer)

---

DELETE FROM users (sempre especificar o dado para deletar, se não vai deletar tudo, SEMPRE USAR O WHERE PARA ESPECIFICAR)

WHERE id = (NUMERO DO ID PRA SER DELETADO.)
