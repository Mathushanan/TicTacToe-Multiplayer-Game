

import 'package:tictactoe_game/resources/socket_client.dart';

class SocketMethods {
  final _socketClient = SocketClient.instance.socket!;


  // EMITS
  void createRoom(String nickname) {
    if (nickname.isNotEmpty) {
      _socketClient.emit('createRoom', {
        'nickname': nickname,
      });
    }
  }
}