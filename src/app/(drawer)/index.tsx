import { Button, Pressable, Text, View } from "react-native";

import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Link, useNavigation } from "expo-router";

type DrawerNav = DrawerNavigationProp<any>;

export default function Page() {
  const navigation = useNavigation<DrawerNav>();

  return (
    <Link href="/about" asChild>
      <Pressable>
        <Text>Home</Text>
        <View
          style={{
            width: "50%",
            alignItems: "center",
          }}
        >
          <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
        </View>
      </Pressable>
    </Link>
  );
}
