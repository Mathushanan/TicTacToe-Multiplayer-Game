import 'package:flutter/material.dart';
import 'package:tictactoe_game/responsive/responsive.dart';
import 'package:tictactoe_game/widgets/custom_button.dart';

class MainMenuScreen extends StatelessWidget {
  static String routeName = '/main-menu';
  const MainMenuScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Responsive(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              CustomButton(
                onTap: () {},
                text: "Create Room",
              ),
              SizedBox(height: 20),
              CustomButton(
                onTap: () {},
                text: "Join Room",
              ),
            ],
          ),
        ),
      ),
    );
  }
}