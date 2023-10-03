
create table autores (
  id serial primary key,
  nome varchar(50) not null,
  idade int
)


create table livros (
  id SERIAL PRIMARY KEY,
  autor_id int not null references autores(id),
  nome TEXT not null,
  genero TEXT,
  editora TEXT,
  data_da_publicacao DATE
)


