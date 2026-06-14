// 데이터를 저장할 배열 생성
let todos = [];

// 1. 초기화: 페이지가 열릴 때 로컬 스토리지에서 데이터 불러오기
function loadTodos() {
    const savedData = localStorage.getItem('todos');
    if (savedData !== null) {
        // JSON.parse()를 이용해 문자열을 다시 배열(객체)로 변환
        todos = JSON.parse(savedData);
    }
    render(); // 화면에 출력
}

// 2. 화면 업데이트 (DOM 렌더링)
function render() {
    const listElement = document.querySelector('#todo-list');
    let htmlString = ''; // HTML 문자열 생성용 변수

    // 배열에 있는 데이터를 바탕으로 HTML 문자열 만들기
    for (let i = 0; i < todos.length; i++) {
        // 완료 상태에 따라 'completed' 클래스 추가
        const isCompleted = todos[i].completed ? 'completed' : '';
        
        htmlString += `
            <li class="${isCompleted}">
                <span>${todos[i].text}</span>
                <div class="btn-group">
                    <button onclick="toggleComplete(${i})">완료</button>
                    <button onclick="editTodo(${i})">수정</button>
                    <button onclick="deleteTodo(${i})">삭제</button>
                </div>
            </li>
        `;
    }

    // document.querySelector()와 .innerHTML 속성을 사용하여 화면에 출력
    listElement.innerHTML = htmlString;

    // 데이터 영구 저장: JSON.stringify()를 이용해 배열을 문자열로 변환 후 로컬스토리지 저장
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 3. 할 일 입력 및 추가 기능
function addTodo() {
    const inputElement = document.querySelector('#todo-input');
    const textValue = inputElement.value; // 입력창의 .value 값을 가져오기

    if (textValue.trim() === '') {
        alert('할 일을 입력해주세요!');
        return;
    }

    // 새로운 할 일을 배열에 추가 (기본 완료 상태는 false)
    todos.push({ text: textValue, completed: false });
    inputElement.value = ''; // 입력창 비우기
    
    render(); // 화면 갱신 및 저장
}

// 4. 상태 변경 (완료)
function toggleComplete(index) {
    // true면 false로, false면 true로 반전시킴
    todos[index].completed = !todos[index].completed;
    render();
}

// 5. 수정 기능
function editTodo(index) {
    const newText = prompt('수정할 내용을 입력하세요:', todos[index].text);
    // 취소를 누르지 않았고 빈칸이 아닐 때만 수정 적용
    if (newText !== null && newText.trim() !== '') {
        todos[index].text = newText;
        render();
    }
}

// 6. 삭제 기능
function deleteTodo(index) {
    if (confirm('정말 삭제하시겠습니까?')) {
        todos.splice(index, 1); // 배열에서 해당 항목 1개 삭제
        render();
    }
}

// --- 이벤트 리스너 등록 (DOM 제어) ---

// '추가' 버튼 클릭 시 (onclick 활용)
document.querySelector('#add-btn').onclick = addTodo;

// 입력창에서 'Enter' 키 입력 시 (onkeydown 활용)
document.querySelector('#todo-input').onkeydown = function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
};

// 프로그램 시작 시 데이터 불러오기 실행
loadTodos();