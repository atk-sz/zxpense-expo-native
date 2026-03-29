import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="index" options={{ title: "ZHome" }} />
      <Drawer.Screen name="about" options={{ title: "About" }} />
    </Drawer>
  );
}
