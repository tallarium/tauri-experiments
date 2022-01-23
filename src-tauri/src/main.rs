#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;

fn main() {
  tauri::Builder::default()
      .setup(|app| {

        app.listen_global("tauri://move", |_event| {
          println!("MOVE!");
        });
        Ok(())
      })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
