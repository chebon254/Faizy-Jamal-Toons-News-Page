// == Theme Change Script == //
function setThemePreference() {
  var d = new Date();
  /*
  * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
  * Early mornig = 0 - 6
  * Morning = 6 - 12
  * Evening = 12 - 18
  * Night = 18 - 23
  */
  var currentHour = d.getHours();  
  console.log("Hour: " + currentHour);
  
  if(currentHour >= 19 || currentHour <= 6) {
    document.querySelector('.body-effect').setAttribute("data-theme", "dark_theme");
    document.querySelector('.back-image').setAttribute("style", "background-image:url('https://images.unsplash.com/photo-1554176259-aa961fc32671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMG1vdW50YWlufGVufDB8fDB8fA%3D%3D&w=1000&q=80');")
  }else {
    document.querySelector('.body-effect').setAttribute("data-theme", "light_theme");
    document.querySelector('.back-image').setAttribute("style", "background-image:url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80');")
  }
}

window.onload = setThemePreference;
// == End of Theme Change Script == //