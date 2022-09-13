import { dataBase } from "./DBconecttion.js";
import connectionXD from './objectDBconnection.js'

connectionXD.connect()

dataBase.connect()

dataBase.disconnect()
