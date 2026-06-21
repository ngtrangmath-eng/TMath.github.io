# promt.md - Lệnh nền cho agent

Bạn đang ở trong workspace tạo phiếu học tập Toán 7. Khi người dùng yêu cầu tạo khung bài mới hoặc hoàn thành phiếu học tập, hãy xử lý theo quy trình sau.

## Lệnh cần ưu tiên

```text
Hoàn thành phiếu học tập [Tên thư mục]
```

```text
Tạo khung phiếu học tập [Tên thư mục]
```

## Nguồn cần đọc

1. `README.md`
2. `curriculum.md`
3. `agent_rules.md`
4. `command_schema.md`
5. Các tệp trong `templates/`
6. `lesson.md` trong thư mục bài học
7. Ba file nội dung `PhanA`, `PhanB`, `PhanC` trong thư mục bài học

## Nhiệm vụ khi tạo khung bài mới

1. Tạo thư mục bài học nếu người dùng yêu cầu và tên thư mục đã rõ.
2. Tạo `lesson.md` theo đúng `templates/lesson_template.md`.
3. Tạo hoặc hướng dẫn tạo 3 file nguồn:
   - `Bai{BAI}-PhanA.md`
   - `Bai{BAI}-PhanB.md`
   - `Bai{BAI}-PhanC.md`
4. Nếu là bài ôn tập chương, dùng quy ước `OnTapChuong{CHUONG}-PhanA/B/C.md`.
5. Không tự bịa nội dung bài học nếu người dùng chưa cung cấp.

## Nhiệm vụ khi hoàn thành phiếu

Tạo hoặc cập nhật một file HTML độc lập trong thư mục bài học.

File HTML phải có đủ:

1. Header bài học lấy từ `lesson.md`.
2. Thông tin học sinh.
3. Điều hướng giữa các phần.
4. Phần A - Kiến thức trọng tâm.
5. Phần B - Luyện tập.
6. Phần C - Kiểm tra đánh giá.
7. Phần kết quả, phản hồi hoặc hướng dẫn chấm nếu phù hợp.
8. Một nút nổi mở bảng kí hiệu toán học popup để chèn kí hiệu vào ô học sinh đang nhập câu trả lời.
9. Nút tải ảnh bài làm lên trong các khung tự luận/vận dụng, có xem trước ảnh và nút xóa ảnh.
10. Nút in phiếu nếu phù hợp.

Tên file đầu ra lấy từ `lesson.md`. Nếu `lesson.md` không ghi rõ, dùng tên thư mục và thêm đuôi `.html`.

## Khung `lesson.md` bắt buộc

Mỗi `lesson.md` của các bài sau phải giữ đúng 8 mục:

1. Thông tin bài học.
2. Mục tiêu tổng quát.
3. Cấu trúc bắt buộc của phiếu.
4. Phần A - Kiến thức trọng tâm.
5. Phần B - Luyện tập.
6. Phần C - Kiểm tra đánh giá.
7. Yêu cầu khi hoàn thành phiếu.
8. Tài nguyên đi kèm nếu có.

## Không làm

- Không lấy nội dung từ thư mục khác khi thư mục đích đã đủ dữ liệu.
- Không tự bịa nội dung chính khi file nguồn đang thiếu hoặc chỉ có nội dung mẫu.
- Không đổi đáp án, thang điểm hoặc mục tiêu bài học nếu nguồn đã ghi rõ.
- Không bỏ qua phần C hoặc phần kết quả/hướng dẫn chấm khi file nguồn đã có đáp án.
