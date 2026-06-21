# Cấu trúc HTML chuẩn

File HTML đầu ra nên có các khối chính sau:

```text
1. Header bài học
2. Thông tin học sinh
3. Điều hướng A/B/C/Kết quả nếu có
4. Phần A - Kiến thức trọng tâm
5. Phần B - Luyện tập
6. Phần C - Kiểm tra đánh giá
7. Kết quả, đáp án hoặc hướng dẫn chấm
8. Nút nổi mở bảng kí hiệu toán học cho các ô học sinh nhập bài
9. Nút tải ảnh bài làm cho ô tự luận/vận dụng nếu phù hợp
10. Nút in phiếu
```

## Khung nội dung bắt buộc

- Header lấy môn, lớp, chương, bài, tên bài và chủ đề từ `lesson.md`.
- Phần A lấy từ `PhanA`, giữ thứ tự: giới thiệu, mục tiêu, ghi nhớ, kĩ năng/quy tắc, ví dụ, sơ đồ tư duy nếu có, tự kiểm tra, lỗi thường gặp.
- Phần B lấy từ `PhanB`, giữ đúng thứ tự bài luyện tập trong nguồn, có vùng trả lời cho học sinh; không hiển thị đáp án gợi ý, hướng dẫn giải hoặc bảng đáp án trên trang luyện tập.
- Phần C lấy từ `PhanC`, giữ đúng trắc nghiệm, tự luận, vận dụng, đáp án, thang điểm và thời gian làm bài.
- Phần kết quả hoặc hướng dẫn chấm chỉ dùng đáp án và nhận xét đã có trong file nguồn.

## Yêu cầu kỹ thuật

- HTML độc lập, mở trực tiếp bằng trình duyệt.
- CSS có thể nhúng trong thẻ `<style>`.
- JavaScript có thể nhúng trong thẻ `<script>`.
- Nhúng `../../../assets/mathjax-loader.js` trong `<head>` để MathJax hiển thị phân số, lũy thừa và kí hiệu toán học; điều chỉnh đường dẫn nếu file HTML ở độ sâu khác.
- Công thức ngắn nên bọc bằng `.math-text`, dòng công thức bằng `.math-line`; các phân số cũ dạng `.frac` vẫn được loader chuyển sang MathJax khi có thể.
- Không phụ thuộc mạng Internet.
- Nếu MathJax CDN không tải được, nội dung toán học vẫn phải đọc được bằng HTML/CSS gốc.
- Nội dung hiển thị rõ trên máy tính và điện thoại.
- Điều hướng có thể dùng dạng tab hoặc các phần cuộn, nhưng học sinh phải thấy rõ đang ở phần A, B, C hay kết quả.
- Phiếu có một nút nổi mở bảng kí hiệu toán học. Không hiển thị bảng ở từng câu.
- Khi học sinh bấm vào một `textarea`, rồi chọn kí hiệu trong bảng popup, kí hiệu phải được chèn vào vị trí con trỏ hiện tại trong câu trả lời.
- Bảng kí hiệu tối thiểu nên có: `ℚ`, `ℤ`, `ℕ`, `∈`, `∉`, `≠`, `<`, `>`, `≤`, `≥`, `=`, `+`, `-`, `·`, `:`, `(`, `)`, `a/b`, `-a/b`, mẫu hỗn số và nút xuống dòng.
- Nếu có bài tự luận, vận dụng hoặc yêu cầu trình bày, dùng `textarea` thay vì chỉ dùng ô nhập một dòng.
- Nếu có tải ảnh bài làm, mỗi vùng tự luận/vận dụng cần có tùy chọn tải ảnh, xem trước ảnh, nút xóa ảnh và lưu ý email giáo viên.
- Nút in phiếu dùng `window.print()` và ẩn các thành phần không cần in bằng lớp `no-print` hoặc quy tắc tương đương.

## Gợi ý tương tác

- Trắc nghiệm dùng `input[type="radio"]` hoặc nút chọn có trạng thái rõ ràng.
- Phần luyện tập chỉ có đề bài, vùng nhập bài làm và nút ghi nhận tiến độ nếu cần; không có nút xem gợi ý, kiểm tra đáp án hoặc xem đáp án gợi ý.
- Phần kiểm tra có thể có đồng hồ nếu `PhanC` ghi thời gian làm bài.
- Khi nộp bài, hiển thị điểm hoặc nhận xét theo mức điểm nếu nguồn đã cung cấp thang nhận xét.
