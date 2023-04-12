import {
	ListItem,
	UnorderedList,
	Card, 
	CardHeader, 
	CardBody, 
	Heading,
	Stack,
	Text,
	StackDivider,
	Box
  } from '@chakra-ui/react'
function AboutUs() {
    return (
		<Card alignItems={"center"} justifyContent={"center"}>
			<CardHeader>
			<Heading size='md'>Sobre Nosotros</Heading>
			</CardHeader>

			<CardBody>
				<Stack divider={<StackDivider />} spacing='4'>
					<Box maxWidth={1000}>
						<Heading size='xs' textTransform='uppercase'>
						Descripción de la aplicación
						</Heading>

						<Text pt='2' fontSize='s'>
						Tacha es una lista de tareas donde puedes agregar las tareas que necesites tener en cuenta para realizar. Tacha te permite crear tareas, borrarlas y "checkear" las tareas que ya hayas cumplido. Tacha te permite agregar una descripción a tus tareas, esto con el fin de poder tener un apartado para saber exactamente que hacer en esta tarea, o bien si quieres puedes poner los avances en dicha tarea. Si te tienes que ir no te preocupes, Tacha va a guardar el listado de tareas por ti para cuando necesites regresar
						</Text>
					</Box>
					
					<Box alignItems={"center"} justifyContent={"center"} minHeight="auto" flexDirection="column">
						<Heading size='xs' textTransform='uppercase'>
						Funcionalidades
						</Heading>
						<UnorderedList>
							<ListItem>Agregar una tarea</ListItem>
							<ListItem>Eliminar una tarea</ListItem>
							<ListItem>Checkear una tarea</ListItem>
							<ListItem>Agregar una descripción a una tarea cuando se crea</ListItem>
							<ListItem>Control de errores al momento de agregar una tarea (el nombre de una tarea siempre debe ser unico)</ListItem>
							<ListItem>Eliminar todas la tareas de la lista</ListItem>
							<ListItem>Guardar la tareas en memoria para cuando se tenga que ir el usuario</ListItem>
							<ListItem>Llevar el conteo de tareas que tienes pendientes</ListItem>
						</UnorderedList>
					</Box>
			
					<Box alignItems={"center"} justifyContent={"center"}>
						<Heading size='xs' textTransform='uppercase'>
						Tecnologías utilizadas
						</Heading>

						<UnorderedList>
							<ListItem>HTML5</ListItem>
							<ListItem>CSS3</ListItem>
							<ListItem>JavaScript</ListItem>
							<ListItem>React</ListItem>
						</UnorderedList>
					</Box>
				</Stack>
			</CardBody>
		</Card>
//   <div>
    //     <header>
	// 	<h1>Sobre nosotros</h1>
	// </header>
	// <main>
	// 	<section>
	// 		<h2>Descripción de la aplicación</h2>
	// 		<p>Tacha es una lsita de tareas donde puedes agregar las tareas que necesites tener en cuenta para realizar. Tacha te permite crear tareas, borrarlas y "checkear" las tareas que ya hayas cumplido. Tacha te permite agregar una descripción a tus tareas, esto con el fin de poder tener un apartado para saber exactamente que hacer en esta tarea, o bien si quieres puedes poner los avances en dicha tarea.</p>
    //         <p>Si te tienes que ir no te preocupes, Tacha va a guardar el listado de tareas por ti para cuando necesites regresar</p>
	// 	</section>
	// 	<section>
	// 		<h2>Funcionalidades</h2>
	// 		<ul>

	// 		</ul>
	// 	</section>
	// 	<section>
	// 		<h2>Tecnologías utilizadas</h2>
	// 		<ul>
	// 			<ListItem>HTML5</ListItem>
	// 			<ListItem>CSS3</ListItem>
	// 			<ListItem>JavaScript</ListItem>
	// 			<ListItem>React</ListItem>
	// 		</ul>
	// 	</section>
	// </main>
	// <footer>
	// 	<p>Derechos reservados &copy; 2023</p>
	// </footer>
    //   </div>
    );
}

export default AboutUs;