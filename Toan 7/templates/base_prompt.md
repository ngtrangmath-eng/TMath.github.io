# Mẫu lệnh tạo phiếu học tập

Dùng mẫu này khi yêu cầu agent tạo khung hoặc hoàn thành một phiếu học tập Toán 7.

## Tạo khung bài mới

```text
Tạo khung phiếu học tập [Tên thư mục]
```

Yêu cầu agent:

- tạo `lesson.md` theo đúng `templates/lesson_template.md`;
- giữ đủ 8 mục trong `lesson.md`;
- tạo hoặc liệt kê 3 file nguồn cần có cho phần A, B, C;
- không tự bịa nội dung bài học nếu chưa có nguồn.

## Hoàn thành phiếu học tập

```text
Hoàn thành phiếu học tập [Tên thư mục]
```

Yêu cầu agent:

- đọc `lesson.md`;
- đọc đủ phần A, B, C;
- tạo file HTML độc lập;
- giữ bố cục gồm header, thông tin học sinh, điều hướng, phần A, phần B, phần C, kết quả hoặc hướng dẫn chấm;
- thêm một nút nổi mở bảng kí hiệu toán học popup để chèn kí hiệu vào ô học sinh đang nhập câu trả lời;
- thêm nút tải ảnh bài làm lên cho các ô tự luận/vận dụng khi phù hợp, có xem trước ảnh và nút xóa ảnh;
- với bài tự luận có tải ảnh lên, hiển thị lưu ý rằng nếu AI không đọc và chấm được chữ viết trong ảnh, bài sẽ được gửi về email cá nhân của giáo viên ngtrang.math@gmail.com để giáo viên chấm và phản hồi;
- giữ đúng kiến thức và đáp án trong file nguồn;
- báo rõ nếu phần nào vẫn là nội dung mẫu.
