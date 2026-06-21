# Bộ file mẫu tạo phiếu học tập Toán 7

Thư mục `Main/` và `templates/` dùng làm chuẩn để tạo các phiếu học tập tiếp theo. Khi tạo bài mới, mỗi thư mục bài học cần có `lesson.md` theo đúng khung 8 mục đã chỉnh và đủ 3 file nguồn A, B, C.

## Cách dùng nhanh

1. Tạo thư mục bài học theo quy ước, ví dụ `Toan7-Chuong1-Bai5`.
2. Sao chép `templates/lesson_template.md` thành `lesson.md` trong thư mục bài học.
3. Điền đủ 8 mục trong `lesson.md`: thông tin bài học, mục tiêu, cấu trúc A/B/C, yêu cầu hoàn thành và tài nguyên đi kèm nếu có.
4. Tạo 3 file nguồn theo số bài:
   - `Bai5-PhanA.md`: Kiến thức trọng tâm.
   - `Bai5-PhanB.md`: Luyện tập.
   - `Bai5-PhanC.md`: Kiểm tra đánh giá.
5. Điền nội dung thật cho từng phần A, B, C.
6. Dùng lệnh:

```text
Hoàn thành phiếu học tập [Tên thư mục]
```

Ví dụ:

```text
Hoàn thành phiếu học tập Toan7-Chuong1-Bai5
```

## Các file chính

```text
lesson.md          Khung 8 mục của bài học và tên file HTML đầu ra
Bai{BAI}-PhanA.md  Phần A - Kiến thức trọng tâm
Bai{BAI}-PhanB.md  Phần B - Luyện tập
Bai{BAI}-PhanC.md  Phần C - Kiểm tra đánh giá
templates/         Mẫu trình bày, cấu trúc HTML và quy ước nội dung
```

## Các file hướng dẫn agent

```text
agent_rules.md       Quy tắc xử lý phiếu học tập
command_schema.md    Quy ước câu lệnh
curriculum.md        Mục lục phiếu học tập
promt.md             Lệnh nền cho agent
structure.md         Cấu trúc thư mục chuẩn
```

## Yêu cầu giữ thống nhất cho các bài sau

- Luôn dựng phiếu từ đúng 3 file nguồn A, B, C trong cùng thư mục bài học.
- Luôn giữ cấu trúc `lesson.md` gồm 8 mục như `templates/lesson_template.md`.
- File HTML đầu ra là file độc lập, mở trực tiếp bằng trình duyệt, không phụ thuộc mạng Internet.
- HTML phải có thông tin học sinh, điều hướng A/B/C, phần kết quả hoặc hướng dẫn chấm, nút in phiếu và một nút nổi mở bảng kí hiệu toán học.
- Các ô tự luận/vận dụng nên có nút tải ảnh bài làm lên khi phù hợp, kèm xem trước ảnh và nút xóa ảnh.
- Không tự ý đổi kiến thức, đáp án, thang điểm hoặc thời gian làm bài đã ghi trong file nguồn.
