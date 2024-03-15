import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';

function page() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Cursos</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Curso de meditación</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default page;
