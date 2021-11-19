package com.example.applivebook;


import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

import java.util.ArrayList;

public class BancoDeDados extends SQLiteOpenHelper {

    public BancoDeDados(@Nullable Context context) {
        super(context, "usuarios", null, 1);
    }

    public long insereusuarios(String username, String email, String password, String cpf, String phone) {
        SQLiteDatabase banco = this.getWritableDatabase();
        ContentValues registro = new ContentValues();
        registro.put("username", username);
        registro.put("email", email);
        registro.put("password", password);
        registro.put("cpf", cpf);
        registro.put("phone", phone);
        long id = banco.insert("usuarios", null, registro);
        banco.close();
        return id;
    }

    public long inserePosts(String id_user, String content, String tags, String like_number, String comment_number) {
        SQLiteDatabase banco = this.getWritableDatabase();
        ContentValues registers = new ContentValues();
        registers.put("id_user", id_user);
        registers.put("content", content);
        registers.put("tags", tags);
        registers.put("like_number", like_number);
        registers.put("comment_number", comment_number);
        long id = banco.insert("posts", null, registers);
        banco.close();
        return id;
    }
    public ArrayList<String> consultar() {
        SQLiteDatabase banco = this.getReadableDatabase();
        String sql = "SELECT * FROM usuarios";
        ArrayList<String> resultado = null;

        Cursor c = banco.rawQuery(sql, null);
        if (c.moveToFirst()) {
            resultado = new ArrayList<String>();
            do {
                String registro;
                registro = "\n id : " + c.getString(1);
                registro = "\n username : " + c.getString(2);
                registro+= "\n email     : " + c.getString(3);
                registro+= "\n password     : " + c.getString(4);
                registro+= "\n cpf    : " + c.getString(5);
                registro+= "\n phone    : " + c.getString(6);


                resultado.add(registro);
            } while (c.moveToNext());
        }
        banco.close();
        return resultado;
    }

    public ArrayList<String> consultarPosts() {
        SQLiteDatabase banco = this.getReadableDatabase();
        String sql = "SELECT * FROM posts";
        ArrayList<String> resultado = null;

        Cursor c = banco.rawQuery(sql, null);
        if (c.moveToFirst()) {
            resultado = new ArrayList<String>();
            do {
                String registro;
                registro = c.getString(0);
                registro = "," + c.getDouble(1);
                registro+= "," + c.getDouble(2);
                registro+= "," + c.getString(3);
                registro+= "," + c.getDouble(4);
                registro+= "," + c.getDouble(5);


                resultado.add(registro);
            } while (c.moveToNext());
        }
        banco.close();
        return resultado;
    }

    public ArrayList<String> consultUser(String email, String password) {
        SQLiteDatabase banco = this.getReadableDatabase();
        String sql = "SELECT * FROM usuarios WHERE email ='" + email + "' AND password ='"+ password + "'";
        ArrayList<String> resulted = null;

        Cursor c = banco.rawQuery(sql, null);
        if (c.moveToFirst()) {
            resulted = new ArrayList<String>();
            do {
                String register;
                register = c.getString(0);
                //register+= "\n username : " + c.getString(2);
                //register+= "\n email     : " + c.getString(3);
                //register+= "\n password     : " + c.getString(4);
                //register+= "\n cpf    : " + c.getString(5);
               // register+= "\n phone    : " + c.getString(6);


                resulted.add(register);
            } while (c.moveToNext());
        }
        banco.close();

        return resulted;
    }


    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {

        String sql = "CREATE TABLE usuarios( " +
                "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                "username TEXT, " +
                "email TEXT," +
                "password TEXT, " +
                "cpf TEXT," +
                "phone TEXT" +
                ")";


        sqLiteDatabase.execSQL(sql);

        sqLiteDatabase.execSQL( "CREATE TABLE posts(" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                "id_user INTEGER," +
                "content TEXT," +
                "tags TEXT," +
                "like_number INTEGER," +
                "comment_number INTEGER," +
                "FOREIGN KEY (id_user)" +
                "       REFERENCES usuarios(id) " +
                ");");
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {

    }

}


