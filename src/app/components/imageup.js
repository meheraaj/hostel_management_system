"use client";
import React, { useState } from "react";
import { MdPhotoCamera } from "react-icons/md"; // Import the camera icon

const ProfileImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <label className="relative cursor-pointer">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <div className="w-[150px] h-[150px] rounded-full bg-[purple] overflow-hidden border-2 border-gray-300">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-500 absolute -bottom-2 -right-2">
              <MdPhotoCamera size={32} /> {/* Camera Icon */}
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default ProfileImageUpload;
