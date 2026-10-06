import {useMemo,useState} from 'react'
import {Navigate,NavLink,Route,Routes,useNavigate} from 'react-router-dom'
import campusImg from './campus.webp'
import schoolMapImg from './school-map.webp'
import classroomImg from './classroom.svg'

const student={name:'Nguyễn Minh Anh',className:'7A2',school:'Trường THCS và THPT Lương Thế Vinh',level:12,xp:3265,xpNext:5000,coins:1250,gems:42,learning:86,training:92,streak:3}
const timetable=[['07:00','Chào cờ / Điểm danh','Sân trường','🏫'],['07:30','Toán 7','Phòng 7A2','📐'],['08:20','Khoa học tự nhiên','Phòng 7A2','🔬'],['09:25','Tiếng Anh','Phòng 7A2','🇬🇧'],['10:15','Ngữ văn','Phòng 7A2','📖'],['14:00','Câu lạc bộ STEM','Phòng STEM','🧪']]
const locations=[
{id:'campus',icon:'🏫',name:'Sân trường',sub:'Trung tâm',desc:'Khu vực trung tâm để nhận nhiệm vụ, gặp NPC và bắt đầu hành trình.',x:48,y:47,route:'/campus'},
{id:'classroom',icon:'📘',name:'Khu lớp học',sub:'Học tập',desc:'Tham gia tiết học, trả lời câu hỏi và tích lũy XP học tập.',x:23,y:17,route:'/classroom'},
{id:'stem',icon:'🧪',name:'Phòng STEM',sub:'Sáng tạo',desc:'Làm thí nghiệm, giải nhiệm vụ bí mật và thử thách KHTN - công nghệ.',x:72,y:18},
{id:'library',icon:'📚',name:'Thư viện',sub:'Tài liệu',desc:'Đọc tài liệu, tìm sách và hoàn thành nhiệm vụ học tập.',x:79,y:42},
{id:'football',icon:'⚽',name:'Sân bóng',sub:'Vận động',desc:'Tham gia mini game thể thao và nhiệm vụ rèn luyện.',x:13,y:39},
{id:'garden',icon:'🌿',name:'Vườn sinh học',sub:'Thiên nhiên',desc:'Khám phá cây xanh, môi trường và các nhiệm vụ sinh học.',x:17,y:72},
{id:'canteen',icon:'🍱',name:'Căn tin',sub:'Nghỉ ngơi',desc:'Điểm dừng giữa giờ và không gian tương tác xã hội trong trường.',x:79,y:72}
]
const seedMissions=[
{id:1,icon:'🏫',title:'Điểm danh hôm nay',type:'Đặc biệt',progress:1,total:1,xp:10},
{id:2,icon:'📘',title:'Tham gia 2 tiết học',type:'Học tập',progress:1,total:2,xp:50},
{id:3,icon:'💡',title:'Trả lời đúng 5 câu hỏi',type:'Học tập',progress:3,total:5,xp:40},
{id:4,icon:'♻️',title:'Nhặt và phân loại 5 mẫu rác',type:'Rèn luyện',progress:2,total:5,xp:20},
{id:5,icon:'📚',title:'Ghé thăm thư viện',type:'Rèn luyện',progress:0,total:1,xp:20},
{id:6,icon:'🔎',title:'Nhiệm vụ bí mật tại STEM',type:'Đặc biệt',progress:0,total:1,xp:80}
]
function Login(){const nav=useNavigate();const [id,setId]=useState('HS001');return <div className='login-screen'><section className='login-visual'><img src={campusImg}/><div className='shade'/><div className='brand'><div className='brandmark'>S</div><div><h1>School<span>Verse</span></h1><p>LEARN • PLAY • GROW</p></div></div><div className='welcome glass'><span className='badge dark'>🎮 TRƯỜNG HỌC SỐ 3D</span><h2>Học như đang chơi một game.</h2><p>Khám phá trường học, tham gia tiết học, hoàn thành nhiệm vụ và phát triển nhân vật mỗi ngày.</p><div className='chips'><span>🏫 Campus 3D</span><span>🎯 Daily Quest</span><span>⭐ XP & Level</span></div></div></section><section className='login-panel'><form className='login-card glass' onSubmit={e=>{e.preventDefault();localStorage.setItem('sv_user',id);nav('/campus')}}><span className='badge'>HỌC SINH</span><h2>Chào mừng trở lại!</h2><p>Đăng nhập để tiếp tục hành trình học tập.</p><label>Mã học sinh</label><div className='inputbox'><span>🎓</span><input value={id} onChange={e=>setId(e.target.value)}/></div><label>Mật khẩu</label><div className='inputbox'><span>🔐</span><input type='password' defaultValue='123456'/></div><button className='primary'>Vào SchoolVerse 🚀</button><div className='demo'>Demo: HS001 / 123456</div></form></section></div>}
function Hud(){const pct=Math.round(student.xp/student.xpNext*100);return <header className='hud hud-v11'>
      <div className='hudbrand'><div className='miniS'>S</div><div><b>School<span>Verse</span></b><small>LEARN • PLAY • GROW</small></div></div>
      <div className='hudmid'>
        <span className='hudcoin'>🪙 <b>{student.coins}</b></span>
        <span className='hudgem'>💎 <b>{student.gems}</b></span>
        <button title='Thông báo'>🔔</button><button title='Cài đặt'>⚙️</button>
      </div>
      <div className='hudprofile'>
        <div className='face'>👦</div>
        <div><b>{student.name}</b><small>Lv.{student.level} • {student.className}</small><div className='xp'><span style={{width:pct+'%'}}/></div></div>
      </div>
    </header>}
function Shell({children}){return <><Hud/><nav className='gamenav glass'>{[['/campus','🏫','Sân trường'],['/missions','🎯','Nhiệm vụ'],['/map','🗺️','Bản đồ'],['/schedule','🗓️','Lịch học'],['/classroom','📘','Lớp học'],['/profile','🏆','Hồ sơ']].map(([to,ic,t])=><NavLink key={to} to={to} className={({isActive})=>isActive?'active':''}><span>{ic}</span><small>{t}</small></NavLink>)}</nav><main className='main'>{children}</main></>}
function Campus(){const nav=useNavigate();const done=seedMissions.filter(m=>m.progress>=m.total).length;return <Shell><section className='campus campus-v11'>
      <img src={campusImg} alt='Sân trường Trường THCS và THPT Lương Thế Vinh'/>
      <div className='campus-vignette'/>
      <div className='campus-card glass campus-welcome-v11'>
        <span className='badge'>☀️ CHÀO BUỔI SÁNG</span>
        <h1>Sẵn sàng cho một ngày mới?</h1>
        <p>Hôm nay bạn có <b>{seedMissions.length-done} nhiệm vụ</b> đang chờ.</p>
        <div className='row'>
          <button className='primary compact' onClick={()=>nav('/missions')}>🎯 Xem nhiệm vụ</button>
          <button className='soft' onClick={()=>nav('/map')}>🗺️ Mở bản đồ</button>
        </div>
      </div>

      <div className='today glass today-v11'>
        <div className='todayhead'><div><small>NHIỆM VỤ HÔM NAY</small><h3>{done}/{seedMissions.length} hoàn thành</h3></div><button onClick={()=>nav('/missions')}>Xem tất cả →</button></div>
        {seedMissions.slice(0,3).map(m=><div className='miniquest' key={m.id}><span>{m.icon}</span><div><b>{m.title}</b><div><i style={{width:(m.progress/m.total*100)+'%'}}/></div></div><strong>+{m.xp} XP</strong></div>)}
      </div>

      <div className='actions actions-v11'>
        <button title='Chạy'>🏃<small>Chạy</small></button>
        <button title='Nhảy'>⬆️<small>Nhảy</small></button>
        <button title='Tương tác'>✋<small>Tương tác</small></button>
      </div>

      <button className='minimap minimap-v11' onClick={()=>nav('/map')} title='Mở bản đồ'>
        <img src={schoolMapImg} alt='Bản đồ nhỏ'/><span>🧭</span>
      </button>
    </section></Shell>}
function MapPage(){const nav=useNavigate();const [sel,setSel]=useState(locations[0]);return <Shell><section className='page map-page-v11'>
      <div className='pagetitle map-title-v11'>
        <div><span className='badge'>🗺️ SCHOOLVERSE MAP</span><h1>Bản đồ trường học 3D</h1><p>Chạm vào một điểm trên bản đồ để khám phá.</p></div>
        <div className='summary map-summary-v11'><span>✨ 7 khu vực</span><span>🎯 3 nhiệm vụ gần đây</span></div>
      </div>

      <div className='mapstage mapstage-v11'>
        <img src={schoolMapImg} alt='Bản đồ 3D SchoolVerse'/>
        <div className='map-soft-shade'/>

        {locations.map(l=><button
          key={l.id}
          aria-label={l.name}
          title={l.name}
          className={'map-hotspot '+(sel.id===l.id?'active':'')}
          style={{left:l.x+'%',top:l.y+'%'}}
          onClick={()=>setSel(l)}>
            <span>{l.icon}</span>
        </button>)}

        <div className='you-are-here' style={{left:locations[0].x+'%',top:locations[0].y+'%'}}>
          <span>👦</span><b>Bạn đang ở đây</b>
        </div>

        <div className='mapinfo glass mapinfo-v11'>
          <span className='badge'>📍 ĐANG CHỌN</span>
          <div className='mapinfo-head'><div className='bigicon'>{sel.icon}</div><div><h2>{sel.name}</h2><small>{sel.sub}</small></div></div>
          <p>{sel.desc}</p>
          <button className='primary compact' disabled={!sel.route} onClick={()=>sel.route&&nav(sel.route)}>
            {sel.route?'Đi đến khu vực →':'Sắp mở khóa'}
          </button>
        </div>
      </div>
    </section></Shell>}
function Missions(){const [missions,setMissions]=useState(seedMissions);const [filter,setFilter]=useState('Tất cả');const visible=useMemo(()=>filter==='Tất cả'?missions:missions.filter(m=>m.type===filter),[missions,filter]);const done=missions.filter(m=>m.progress>=m.total).length;const pct=Math.round(done/missions.length*100);return <Shell><section className='page'><div className='missionhero glass'><div><span className='badge'>🎯 DAILY QUEST</span><h1>Nhiệm vụ hôm nay</h1><p>Hoàn thành nhiệm vụ để tăng XP, SchoolCoin và điểm rèn luyện.</p><div className='bigprogress'><div><span style={{width:pct+'%'}}/></div><b>{pct}%</b></div></div><div className='reward'>🎁<b>Quà hoàn thành ngày</b><small>+100 XP • +50 SchoolCoin</small></div></div><div className='filters'>{['Tất cả','Học tập','Rèn luyện','Đặc biệt'].map(f=><button className={filter===f?'active':''} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div><div className='questlist'>{visible.map(m=>{const d=m.progress>=m.total;const p=Math.round(m.progress/m.total*100);return <article className={d?'done':''} key={m.id}><div className='qicon'>{m.icon}</div><div className='qmain'><div className='qhead'><div><small>{m.type}</small><h3>{m.title}</h3></div><span>+{m.xp} XP</span></div><div className='qprogress'><div><span style={{width:p+'%'}}/></div><b>{m.progress}/{m.total}</b></div></div><button disabled={d} onClick={()=>setMissions(ms=>ms.map(x=>x.id===m.id?{...x,progress:Math.min(x.total,x.progress+1)}:x))}>{d?'Hoàn thành ✓':'Tiến hành'}</button></article>})}</div></section></Shell>}
function Profile(){const pct=Math.round(student.xp/student.xpNext*100);return <Shell><section className='page'><div className='profilehero glass'><div className='avatar'>👦</div><div><span className='badge'>⭐ LEVEL {student.level}</span><h1>{student.name}</h1><p>{student.className} • {student.school}</p><div className='profilexp'><div><span style={{width:pct+'%'}}/></div><b>{student.xp.toLocaleString('vi-VN')} / {student.xpNext.toLocaleString('vi-VN')} XP</b></div></div></div><div className='stats'>{[['📘',student.learning,'Học tập'],['🌱',student.training,'Rèn luyện'],['🔥',student.streak,'Chuỗi ngày'],['🪙',student.coins,'SchoolCoin']].map(([i,n,t])=><article key={t}><span>{i}</span><b>{n}</b><small>{t}</small></article>)}</div><div className='profilegrid'><section className='glass panel'><span className='badge'>🏆 THÀNH TÍCH</span><h2>Huy hiệu của bạn</h2><div className='badges'>{[['🌟','Khởi đầu tốt'],['🧪','Nhà khoa học'],['📚','Mọt sách'],['♻️','Sống xanh']].map(([i,t])=><div key={t}>{i}<b>{t}</b></div>)}</div></section><section className='glass panel'><span className='badge'>🚀 MỤC TIÊU</span><h2>Lên Level 13</h2><p>Bạn còn <b>{student.xpNext-student.xp} XP</b> để đạt cấp tiếp theo.</p><button className='primary compact'>Xem nhiệm vụ gợi ý</button></section></div></section></Shell>}

function Schedule(){const nav=useNavigate();return <Shell><section className='page'><div className='pagetitle'><div><span className='badge'>🗓️ LỊCH HỌC HÔM NAY</span><h1>Thời khóa biểu</h1><p>Một ngày học được tổ chức như trong trường thật.</p></div><div className='summary'><span>📚 4 tiết học</span><span>🧪 1 hoạt động STEM</span></div></div><div className='schedule-layout'><section className='schedule-board glass'><div className='schedule-head'><div><small>THỨ HAI</small><h2>Ngày học của Minh Anh</h2></div><span className='status-live'>● Đang trong ngày học</span></div><div className='schedule-list'>{timetable.map((it,i)=><div className={'schedule-item '+(i===2?'current':'')} key={it[0]}><div className='time'>{it[0]}</div><div className='schedule-icon'>{it[3]}</div><div className='schedule-copy'><b>{it[1]}</b><small>{it[2]}</small></div><span className='schedule-type'>{i===2?'Sắp diễn ra':'Đã lên lịch'}</span><button onClick={()=>nav('/classroom')}>Vào lớp</button></div>)}</div></section><aside className='next-class glass'><span className='badge'>⏰ TIẾT TIẾP THEO</span><div className='next-icon'>🔬</div><h2>Khoa học tự nhiên</h2><p>Phòng 7A2 • 08:20</p><div className='countdown'><div><b>00</b><small>giờ</small></div><div><b>12</b><small>phút</small></div><div><b>36</b><small>giây</small></div></div><button className='primary' onClick={()=>nav('/classroom')}>Đi đến lớp học →</button><div className='teacher-note'>👩‍🏫 <span><b>Cô Lan nhắn:</b><small>Nhớ chuẩn bị vở KHTN và máy tính cầm tay nhé!</small></span></div></aside></div></section></Shell>}

function Classroom(){const [selected,setSelected]=useState(null);const [submitted,setSubmitted]=useState(false);const answers=[['A','8 m/s'],['B','10 m/s'],['C','12 m/s'],['D','15 m/s']];const correct='C';return <Shell><section className='page'><div className='pagetitle'><div><span className='badge'>📘 TIẾT HỌC TRỰC TIẾP</span><h1>Khoa học tự nhiên 7</h1><p>Bài: Tốc độ chuyển động</p></div><div className='summary'><span>🎯 Focus 92%</span><span>⭐ +30 XP</span></div></div><div className='classroom-layout'><section className='classroom-scene'><img src={classroomImg} alt='Lớp học'/><div className='teacher-dialog glass'><span>👩‍🏫</span><div><b>Cô Lan</b><p>Một ô tô đi được 120 m trong 10 giây. Em hãy tính tốc độ của xe.</p></div></div><div className='focus-meter glass'><span>🎯 Focus</span><div><i style={{width:'92%'}}/></div><b>92%</b></div></section><aside className='quiz-card glass'><div className='quiz-top'><span className='badge'>CÂU HỎI 3 / 5</span><b>+10 XP</b></div><h2>Tốc độ của xe bằng bao nhiêu?</h2><p className='formula'>v = s / t = 120 / 10 = ?</p><div className='answers'>{answers.map(([k,t])=><button key={k} className={(selected===k?'selected ':'')+(submitted?(k===correct?'correct':selected===k?'wrong':''):'')} onClick={()=>!submitted&&setSelected(k)}><span>{k}</span><b>{t}</b></button>)}</div>{submitted&&<div className={'feedback '+(selected===correct?'ok':'bad')}>{selected===correct?'✅ Chính xác! Tốc độ của xe là 12 m/s.':'❌ Chưa đúng. Hãy nhớ công thức v = s/t.'}</div>}<button className='primary' disabled={!selected} onClick={()=>setSubmitted(true)}>{submitted?'Câu tiếp theo →':'Kiểm tra đáp án'}</button></aside></div></section></Shell>}

function Guard({children}){return localStorage.getItem('sv_user')?children:<Navigate to='/' replace/>}
export default function App(){return <Routes><Route path='/' element={<Login/>}/><Route path='/campus' element={<Guard><Campus/></Guard>}/><Route path='/map' element={<Guard><MapPage/></Guard>}/><Route path='/missions' element={<Guard><Missions/></Guard>}/><Route path='/schedule' element={<Guard><Schedule/></Guard>}/><Route path='/classroom' element={<Guard><Classroom/></Guard>}/><Route path='/profile' element={<Guard><Profile/></Guard>}/><Route path='*' element={<Navigate to='/' replace/>}/></Routes>}
