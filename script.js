function getAdmins(map){
  let admins = []; //declara variavel
  for([key, value] of map){
    if(value === 'Admin'){
      admins.push(key);
    }
  }
  return admins;
}
  const usuarios = new Map(); //adiciona usuarios com MAP

  usuarios.set('Renan', 'Admin');
  usuarios.set('Jessica', 'Admin');
  usuarios.set('Bernardo', 'user');
  usuarios.set('Sueli', 'user');

  console.log(getAdmins(usuarios));

