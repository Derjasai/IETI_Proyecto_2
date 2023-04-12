function AboutUs() {
    return (
      <div>
        <header>
		<h1>Sobre nosotros</h1>
	</header>
	<main>
		<section>
			<h2>Descripción de la aplicación</h2>
			<p>Tacha es una lsita de tareas donde puedes agregar las tareas que necesites tener en cuenta para realizar. Tacha te permite crear tareas, borrarlas y "checkear" las tareas que ya hayas cumplido. Tacha te permite agregar una descripción a tus tareas, esto con el fin de poder tener un apartado para saber exactamente que hacer en esta tarea, o bein si quieres puedes poner los avances en dicha tarea.</p>
            <p>Si te tienes que ir no te preocupes, Tacha va a guardar el listado de tareas por ti para cuando necesites regresar</p>
		</section>
		<section>
			<h2>Funcionalidade</h2>
			<ul>
				<li>Agregar una tarea</li>
				<li>Eliminar una tarea</li>
				<li>Checkear una tarea</li>
				<li>Agregar una descripción a una tarea cuando se crea</li>
				<li>Control de errores al momento de agregar una tarea (el nombre de una tarea siempre debe ser unico)</li>
				<li>Eliminar todas la tareas de la lista</li>
				<li>Guardar la tareas en memoria para cuando se tenga que ir el usuario</li>
				<li>Llevar el conteo de tareas que tienes pendientes</li>
			</ul>
		</section>
		<section>
			<h2>Tecnologías utilizadas</h2>
			<ul>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>JavaScript</li>
				<li>React</li>
			</ul>
		</section>
	</main>
	<footer>
		<p>Derechos reservados &copy; 2023</p>
	</footer>
      </div>
    );
}

export default AboutUs;