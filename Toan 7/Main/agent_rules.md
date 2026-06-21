# Quy tắc agent cho phiếu học tập Toán 7

Tệp này quy định cách xử lý khi tạo khung bài mới hoặc hoàn thành phiếu học tập từ các file nguồn trong workspace.

## Lệnh chính

```text
Hoàn thành phiếu học tập [Tên thư mục]
```

Agent cần mở đúng thư mục được nêu, đọc `lesson.md`, sau đó đọc đủ 3 phần A, B, C để tạo hoặc cập nhật file HTML đầu ra.

## Lệnh tạo khung

```text
Tạo khung phiếu học tập [Tên thư mục]
```

Khi tạo khung, agent dùng `templates/lesson_template.md`, giữ đủ 8 mục trong `lesson.md`, tạo đúng tên 3 file nguồn A, B, C nếu thông tin chương và bài đã rõ.

## Các bước bắt buộc

1. Tìm thư mục bài học theo đúng tên người dùng đưa ra.
2. Đọc `lesson.md` để lấy môn, lớp, chương, bài, tên bài, chủ đề, mục tiêu, cấu trúc A/B/C và file đầu ra.
3. Đọc đủ 3 file nội dung:
   - `PhanA`: kiến thức trọng tâm.
   - `PhanB`: luyện tập.
   - `PhanC`: kiểm tra đánh giá.
4. Nếu file vẫn còn nội dung mẫu, báo rõ phần cần hoàn thiện.
5. Tạo hoặc cập nhật file HTML trong chính thư mục bài học.
6. Thêm một nút nổi mở bảng kí hiệu toán học để học sinh chèn kí hiệu vào các ô nhập bài trong phần luyện tập, tự luận và vận dụng.
7. Thêm nút tải ảnh bài làm lên cho các ô tự luận/vận dụng, có xem trước ảnh và nút xóa ảnh.
8. Với bài tự luận có tải ảnh lên, hiển thị đúng lưu ý gửi về email giáo viên khi AI không đọc được chữ viết trong ảnh.
9. Kiểm tra lại sản phẩm có đủ 3 phần A, B, C và phần kết quả hoặc hướng dẫn chấm trước khi báo hoàn thành.

## Khung `lesson.md` cho các bài sau

Mỗi bài phải giữ đủ các mục sau:

1. Thông tin bài học.
2. Mục tiêu tổng quát.
3. Cấu trúc bắt buộc của phiếu.
4. Phần A - Kiến thức trọng tâm.
5. Phần B - Luyện tập.
6. Phần C - Kiểm tra đánh giá.
7. Yêu cầu khi hoàn thành phiếu.
8. Tài nguyên đi kèm nếu có.

## Nguyên tắc nội dung

- Giữ đúng kiến thức, câu hỏi, đáp án và thang điểm từ file nguồn.
- Không tự thêm kiến thức làm thay đổi mục tiêu bài học.
- Có thể chuyển cách trình bày thành tương tác, nhưng không làm sai lệch nội dung.
- Nếu thiếu một phần A, B hoặc C, báo rõ phần thiếu.
- Nếu phần A, B, C có thứ tự nội dung riêng trong `lesson.md`, ưu tiên thứ tự đó khi dựng HTML.

## Sản phẩm HTML

HTML đầu ra nên có:

- thông tin học sinh;
- điều hướng giữa các phần;
- phần kiến thức trọng tâm;
- phần luyện tập;
- phần kiểm tra đánh giá;
- phần kết quả, đáp án hoặc hướng dẫn chấm nếu nguồn đã cung cấp;
- một nút nổi mở bảng kí hiệu toán học popup; không hiển thị bảng lặp lại ở từng câu;
- nút tải ảnh bài làm lên trong các khung tự luận/vận dụng;
- lưu ý với bài tự luận có tải ảnh lên: nếu AI không đọc và chấm được chữ viết trong ảnh, bài sẽ được gửi về email cá nhân của giáo viên ngtrang.math@gmail.com để giáo viên chấm và phản hồi;
- nút in phiếu nếu phù hợp.

Riêng phần luyện tập chỉ hiển thị đề bài, vùng nhập bài làm và nút ghi nhận tiến độ nếu cần. Không hiển thị đáp án gợi ý, hướng dẫn giải, bảng đáp án, nút xem gợi ý hoặc nút kiểm tra đáp án trong trang luyện tập.

## Kiểm tra cuối trước khi báo hoàn thành

- File HTML nằm đúng thư mục bài học.
- Tên file HTML khớp `lesson.md`.
- Không còn nhãn mẫu như `{TEN_BAI}`, `{MUC_TIEU_1}` trong sản phẩm hoàn chỉnh.
- Các câu hỏi, đáp án và thang điểm trong HTML khớp file nguồn.
- Trang luyện tập không hiển thị đáp án gợi ý, hướng dẫn giải, bảng đáp án hoặc nút kiểm tra đáp án.
- Bảng kí hiệu toán học chỉ có một popup nổi và chèn được vào `textarea` đang được chọn.
