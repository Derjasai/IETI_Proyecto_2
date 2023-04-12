import { Tab, TabList, Tabs } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <Tabs size='md'variant='soft-rounded' colorScheme='green'>
        <TabList>
            <Tab><Link to="/">Home</Link></Tab>
            <Tab><Link to="/SobreNosotros">Sobre Nosotros</Link></Tab>
            <Tab><Link to="/App">Tareas</Link></Tab>
        </TabList>
    </Tabs>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/SobreNosotros">Sobre Nosotros</Link>
    //     </li>
    //     <li>
    //       <Link to="/App">Tareas</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}