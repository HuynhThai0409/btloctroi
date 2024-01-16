import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  //en-US
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("vi-VN", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

// 
export const multiFormatDateString = (timestamp: string = ""): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampNum * 1000);
  const now: Date = new Date();

  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("vi-VN", options);

  switch (true) {
    case Math.floor(diffInDays) >= 30:
      return formatDateString(timestamp);
    case Math.floor(diffInDays) === 1:
      return `${Math.floor(diffInDays)} ngày`;
    case Math.floor(diffInDays) > 1 && diffInDays < 30:
      return formattedDate;
    case Math.floor(diffInHours) >= 1:
      return `${Math.floor(diffInHours)} giờ`;
    case Math.floor(diffInMinutes) >= 1:
      return `${Math.floor(diffInMinutes)} phút`;
    default:
      return "Ngay bây giờ";
  }
};

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};