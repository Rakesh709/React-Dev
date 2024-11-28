import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, lable, defaultValue = "" }) {
  return (
    // <Editor
    //     initialValue='default value'
    //     init={
    //         {branding:false,
    //         height:500,
    //         menubar:true,
    //         plugins:[
    //             'advlist autolink Rists link image charmap print preview anchor' , 'earchreplace visualblocks code fullscreen' ,'insertdatetime media table paste code help wordcount'
    //         ],
    //         toolbar: 'undo redo I formatselect | bold backcolor | \ align left aligncenter alignright \ bullist numlist outdent indent | removeformat | help'
    //         }
    //     }
    // />

    <div className="w-full">
      {lable && <lable className="inline-block mb-1 pl-1">{lable}</lable>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
          initialValue={defaultValue}
            init={{
              initialValue:defaultValue,
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink Rists link image charmap print preview anchor",
                "earchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo I formatselect | bold backcolor |  align left aligncenter alignright  bullist numlist outdent indent | removeformat | help",
                content_style:"body { font-family: Helvetica, Arial, sans-serif; font-size:14px}"
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

//control will pass the component to form
