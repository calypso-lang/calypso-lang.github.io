(function() {var implementors = {};
implementors["endian_type"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"endian_type/struct.BigEndian.html\" title=\"struct endian_type::BigEndian\">BigEndian</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"endian_type/struct.BigEndian.html\" title=\"struct endian_type::BigEndian\">BigEndian</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>,&nbsp;</span>","synthetic":false,"types":["endian_type::BigEndian"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"endian_type/struct.LittleEndian.html\" title=\"struct endian_type::LittleEndian\">LittleEndian</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"endian_type/struct.LittleEndian.html\" title=\"struct endian_type::LittleEndian\">LittleEndian</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>,&nbsp;</span>","synthetic":false,"types":["endian_type::LittleEndian"]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, Global&gt;&gt; for &amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["indexmap"] = [{"text":"impl&lt;T, S1, S2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S2&gt;&gt; for &amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::set::IndexSet"]}];
implementors["nix"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/fcntl/struct.AtFlags.html\" title=\"struct nix::fcntl::AtFlags\">AtFlags</a>&gt; for <a class=\"struct\" href=\"nix/fcntl/struct.AtFlags.html\" title=\"struct nix::fcntl::AtFlags\">AtFlags</a>","synthetic":false,"types":["nix::fcntl::AtFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/fcntl/struct.OFlag.html\" title=\"struct nix::fcntl::OFlag\">OFlag</a>&gt; for <a class=\"struct\" href=\"nix/fcntl/struct.OFlag.html\" title=\"struct nix::fcntl::OFlag\">OFlag</a>","synthetic":false,"types":["nix::fcntl::OFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/fcntl/struct.RenameFlags.html\" title=\"struct nix::fcntl::RenameFlags\">RenameFlags</a>&gt; for <a class=\"struct\" href=\"nix/fcntl/struct.RenameFlags.html\" title=\"struct nix::fcntl::RenameFlags\">RenameFlags</a>","synthetic":false,"types":["nix::fcntl::RenameFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/fcntl/struct.SealFlag.html\" title=\"struct nix::fcntl::SealFlag\">SealFlag</a>&gt; for <a class=\"struct\" href=\"nix/fcntl/struct.SealFlag.html\" title=\"struct nix::fcntl::SealFlag\">SealFlag</a>","synthetic":false,"types":["nix::fcntl::SealFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/fcntl/struct.FdFlag.html\" title=\"struct nix::fcntl::FdFlag\">FdFlag</a>&gt; for <a class=\"struct\" href=\"nix/fcntl/struct.FdFlag.html\" title=\"struct nix::fcntl::FdFlag\">FdFlag</a>","synthetic":false,"types":["nix::fcntl::FdFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/fcntl/struct.SpliceFFlags.html\" title=\"struct nix::fcntl::SpliceFFlags\">SpliceFFlags</a>&gt; for <a class=\"struct\" href=\"nix/fcntl/struct.SpliceFFlags.html\" title=\"struct nix::fcntl::SpliceFFlags\">SpliceFFlags</a>","synthetic":false,"types":["nix::fcntl::SpliceFFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/fcntl/struct.FallocateFlags.html\" title=\"struct nix::fcntl::FallocateFlags\">FallocateFlags</a>&gt; for <a class=\"struct\" href=\"nix/fcntl/struct.FallocateFlags.html\" title=\"struct nix::fcntl::FallocateFlags\">FallocateFlags</a>","synthetic":false,"types":["nix::fcntl::FallocateFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/kmod/struct.ModuleInitFlags.html\" title=\"struct nix::kmod::ModuleInitFlags\">ModuleInitFlags</a>&gt; for <a class=\"struct\" href=\"nix/kmod/struct.ModuleInitFlags.html\" title=\"struct nix::kmod::ModuleInitFlags\">ModuleInitFlags</a>","synthetic":false,"types":["nix::kmod::ModuleInitFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/kmod/struct.DeleteModuleFlags.html\" title=\"struct nix::kmod::DeleteModuleFlags\">DeleteModuleFlags</a>&gt; for <a class=\"struct\" href=\"nix/kmod/struct.DeleteModuleFlags.html\" title=\"struct nix::kmod::DeleteModuleFlags\">DeleteModuleFlags</a>","synthetic":false,"types":["nix::kmod::DeleteModuleFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/mount/struct.MsFlags.html\" title=\"struct nix::mount::MsFlags\">MsFlags</a>&gt; for <a class=\"struct\" href=\"nix/mount/struct.MsFlags.html\" title=\"struct nix::mount::MsFlags\">MsFlags</a>","synthetic":false,"types":["nix::mount::linux::MsFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/mount/struct.MntFlags.html\" title=\"struct nix::mount::MntFlags\">MntFlags</a>&gt; for <a class=\"struct\" href=\"nix/mount/struct.MntFlags.html\" title=\"struct nix::mount::MntFlags\">MntFlags</a>","synthetic":false,"types":["nix::mount::linux::MntFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/mqueue/struct.MQ_OFlag.html\" title=\"struct nix::mqueue::MQ_OFlag\">MQ_OFlag</a>&gt; for <a class=\"struct\" href=\"nix/mqueue/struct.MQ_OFlag.html\" title=\"struct nix::mqueue::MQ_OFlag\">MQ_OFlag</a>","synthetic":false,"types":["nix::mqueue::MQ_OFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/mqueue/struct.FdFlag.html\" title=\"struct nix::mqueue::FdFlag\">FdFlag</a>&gt; for <a class=\"struct\" href=\"nix/mqueue/struct.FdFlag.html\" title=\"struct nix::mqueue::FdFlag\">FdFlag</a>","synthetic":false,"types":["nix::mqueue::FdFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/net/if_/struct.InterfaceFlags.html\" title=\"struct nix::net::if_::InterfaceFlags\">InterfaceFlags</a>&gt; for <a class=\"struct\" href=\"nix/net/if_/struct.InterfaceFlags.html\" title=\"struct nix::net::if_::InterfaceFlags\">InterfaceFlags</a>","synthetic":false,"types":["nix::net::if_::InterfaceFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/poll/struct.PollFlags.html\" title=\"struct nix::poll::PollFlags\">PollFlags</a>&gt; for <a class=\"struct\" href=\"nix/poll/struct.PollFlags.html\" title=\"struct nix::poll::PollFlags\">PollFlags</a>","synthetic":false,"types":["nix::poll::PollFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sched/struct.CloneFlags.html\" title=\"struct nix::sched::CloneFlags\">CloneFlags</a>&gt; for <a class=\"struct\" href=\"nix/sched/struct.CloneFlags.html\" title=\"struct nix::sched::CloneFlags\">CloneFlags</a>","synthetic":false,"types":["nix::sched::sched_linux_like::CloneFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/epoll/struct.EpollFlags.html\" title=\"struct nix::sys::epoll::EpollFlags\">EpollFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/epoll/struct.EpollFlags.html\" title=\"struct nix::sys::epoll::EpollFlags\">EpollFlags</a>","synthetic":false,"types":["nix::sys::epoll::EpollFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/epoll/struct.EpollCreateFlags.html\" title=\"struct nix::sys::epoll::EpollCreateFlags\">EpollCreateFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/epoll/struct.EpollCreateFlags.html\" title=\"struct nix::sys::epoll::EpollCreateFlags\">EpollCreateFlags</a>","synthetic":false,"types":["nix::sys::epoll::EpollCreateFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/eventfd/struct.EfdFlags.html\" title=\"struct nix::sys::eventfd::EfdFlags\">EfdFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/eventfd/struct.EfdFlags.html\" title=\"struct nix::sys::eventfd::EfdFlags\">EfdFlags</a>","synthetic":false,"types":["nix::sys::eventfd::EfdFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/memfd/struct.MemFdCreateFlag.html\" title=\"struct nix::sys::memfd::MemFdCreateFlag\">MemFdCreateFlag</a>&gt; for <a class=\"struct\" href=\"nix/sys/memfd/struct.MemFdCreateFlag.html\" title=\"struct nix::sys::memfd::MemFdCreateFlag\">MemFdCreateFlag</a>","synthetic":false,"types":["nix::sys::memfd::MemFdCreateFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/mman/struct.ProtFlags.html\" title=\"struct nix::sys::mman::ProtFlags\">ProtFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/mman/struct.ProtFlags.html\" title=\"struct nix::sys::mman::ProtFlags\">ProtFlags</a>","synthetic":false,"types":["nix::sys::mman::ProtFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/mman/struct.MapFlags.html\" title=\"struct nix::sys::mman::MapFlags\">MapFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/mman/struct.MapFlags.html\" title=\"struct nix::sys::mman::MapFlags\">MapFlags</a>","synthetic":false,"types":["nix::sys::mman::MapFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/mman/struct.MRemapFlags.html\" title=\"struct nix::sys::mman::MRemapFlags\">MRemapFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/mman/struct.MRemapFlags.html\" title=\"struct nix::sys::mman::MRemapFlags\">MRemapFlags</a>","synthetic":false,"types":["nix::sys::mman::MRemapFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/mman/struct.MsFlags.html\" title=\"struct nix::sys::mman::MsFlags\">MsFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/mman/struct.MsFlags.html\" title=\"struct nix::sys::mman::MsFlags\">MsFlags</a>","synthetic":false,"types":["nix::sys::mman::MsFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/mman/struct.MlockAllFlags.html\" title=\"struct nix::sys::mman::MlockAllFlags\">MlockAllFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/mman/struct.MlockAllFlags.html\" title=\"struct nix::sys::mman::MlockAllFlags\">MlockAllFlags</a>","synthetic":false,"types":["nix::sys::mman::MlockAllFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/personality/struct.Persona.html\" title=\"struct nix::sys::personality::Persona\">Persona</a>&gt; for <a class=\"struct\" href=\"nix/sys/personality/struct.Persona.html\" title=\"struct nix::sys::personality::Persona\">Persona</a>","synthetic":false,"types":["nix::sys::personality::Persona"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/ptrace/struct.Options.html\" title=\"struct nix::sys::ptrace::Options\">Options</a>&gt; for <a class=\"struct\" href=\"nix/sys/ptrace/struct.Options.html\" title=\"struct nix::sys::ptrace::Options\">Options</a>","synthetic":false,"types":["nix::sys::ptrace::linux::Options"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/quota/struct.QuotaValidFlags.html\" title=\"struct nix::sys::quota::QuotaValidFlags\">QuotaValidFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/quota/struct.QuotaValidFlags.html\" title=\"struct nix::sys::quota::QuotaValidFlags\">QuotaValidFlags</a>","synthetic":false,"types":["nix::sys::quota::QuotaValidFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/signal/struct.SaFlags.html\" title=\"struct nix::sys::signal::SaFlags\">SaFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/signal/struct.SaFlags.html\" title=\"struct nix::sys::signal::SaFlags\">SaFlags</a>","synthetic":false,"types":["nix::sys::signal::SaFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/signalfd/struct.SfdFlags.html\" title=\"struct nix::sys::signalfd::SfdFlags\">SfdFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/signalfd/struct.SfdFlags.html\" title=\"struct nix::sys::signalfd::SfdFlags\">SfdFlags</a>","synthetic":false,"types":["nix::sys::signalfd::SfdFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/socket/struct.SockFlag.html\" title=\"struct nix::sys::socket::SockFlag\">SockFlag</a>&gt; for <a class=\"struct\" href=\"nix/sys/socket/struct.SockFlag.html\" title=\"struct nix::sys::socket::SockFlag\">SockFlag</a>","synthetic":false,"types":["nix::sys::socket::SockFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/socket/struct.MsgFlags.html\" title=\"struct nix::sys::socket::MsgFlags\">MsgFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/socket/struct.MsgFlags.html\" title=\"struct nix::sys::socket::MsgFlags\">MsgFlags</a>","synthetic":false,"types":["nix::sys::socket::MsgFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/stat/struct.SFlag.html\" title=\"struct nix::sys::stat::SFlag\">SFlag</a>&gt; for <a class=\"struct\" href=\"nix/sys/stat/struct.SFlag.html\" title=\"struct nix::sys::stat::SFlag\">SFlag</a>","synthetic":false,"types":["nix::sys::stat::SFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/stat/struct.Mode.html\" title=\"struct nix::sys::stat::Mode\">Mode</a>&gt; for <a class=\"struct\" href=\"nix/sys/stat/struct.Mode.html\" title=\"struct nix::sys::stat::Mode\">Mode</a>","synthetic":false,"types":["nix::sys::stat::Mode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/statvfs/struct.FsFlags.html\" title=\"struct nix::sys::statvfs::FsFlags\">FsFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/statvfs/struct.FsFlags.html\" title=\"struct nix::sys::statvfs::FsFlags\">FsFlags</a>","synthetic":false,"types":["nix::sys::statvfs::FsFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/termios/struct.InputFlags.html\" title=\"struct nix::sys::termios::InputFlags\">InputFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/termios/struct.InputFlags.html\" title=\"struct nix::sys::termios::InputFlags\">InputFlags</a>","synthetic":false,"types":["nix::sys::termios::InputFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/termios/struct.OutputFlags.html\" title=\"struct nix::sys::termios::OutputFlags\">OutputFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/termios/struct.OutputFlags.html\" title=\"struct nix::sys::termios::OutputFlags\">OutputFlags</a>","synthetic":false,"types":["nix::sys::termios::OutputFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/termios/struct.ControlFlags.html\" title=\"struct nix::sys::termios::ControlFlags\">ControlFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/termios/struct.ControlFlags.html\" title=\"struct nix::sys::termios::ControlFlags\">ControlFlags</a>","synthetic":false,"types":["nix::sys::termios::ControlFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/termios/struct.LocalFlags.html\" title=\"struct nix::sys::termios::LocalFlags\">LocalFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/termios/struct.LocalFlags.html\" title=\"struct nix::sys::termios::LocalFlags\">LocalFlags</a>","synthetic":false,"types":["nix::sys::termios::LocalFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/wait/struct.WaitPidFlag.html\" title=\"struct nix::sys::wait::WaitPidFlag\">WaitPidFlag</a>&gt; for <a class=\"struct\" href=\"nix/sys/wait/struct.WaitPidFlag.html\" title=\"struct nix::sys::wait::WaitPidFlag\">WaitPidFlag</a>","synthetic":false,"types":["nix::sys::wait::WaitPidFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/inotify/struct.AddWatchFlags.html\" title=\"struct nix::sys::inotify::AddWatchFlags\">AddWatchFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/inotify/struct.AddWatchFlags.html\" title=\"struct nix::sys::inotify::AddWatchFlags\">AddWatchFlags</a>","synthetic":false,"types":["nix::sys::inotify::AddWatchFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/inotify/struct.InitFlags.html\" title=\"struct nix::sys::inotify::InitFlags\">InitFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/inotify/struct.InitFlags.html\" title=\"struct nix::sys::inotify::InitFlags\">InitFlags</a>","synthetic":false,"types":["nix::sys::inotify::InitFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/timerfd/struct.TimerFlags.html\" title=\"struct nix::sys::timerfd::TimerFlags\">TimerFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/timerfd/struct.TimerFlags.html\" title=\"struct nix::sys::timerfd::TimerFlags\">TimerFlags</a>","synthetic":false,"types":["nix::sys::timerfd::TimerFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/sys/timerfd/struct.TimerSetTimeFlags.html\" title=\"struct nix::sys::timerfd::TimerSetTimeFlags\">TimerSetTimeFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/timerfd/struct.TimerSetTimeFlags.html\" title=\"struct nix::sys::timerfd::TimerSetTimeFlags\">TimerSetTimeFlags</a>","synthetic":false,"types":["nix::sys::timerfd::TimerSetTimeFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"nix/unistd/struct.AccessFlags.html\" title=\"struct nix::unistd::AccessFlags\">AccessFlags</a>&gt; for <a class=\"struct\" href=\"nix/unistd/struct.AccessFlags.html\" title=\"struct nix::unistd::AccessFlags\">AccessFlags</a>","synthetic":false,"types":["nix::unistd::AccessFlags"]}];
implementors["rustix"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.FdFlags.html\" title=\"struct rustix::fs::FdFlags\">FdFlags</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.FdFlags.html\" title=\"struct rustix::fs::FdFlags\">FdFlags</a>","synthetic":false,"types":["rustix::backend::fs::types::FdFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.Access.html\" title=\"struct rustix::fs::Access\">Access</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.Access.html\" title=\"struct rustix::fs::Access\">Access</a>","synthetic":false,"types":["rustix::backend::fs::types::Access"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.AtFlags.html\" title=\"struct rustix::fs::AtFlags\">AtFlags</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.AtFlags.html\" title=\"struct rustix::fs::AtFlags\">AtFlags</a>","synthetic":false,"types":["rustix::backend::fs::types::AtFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.Mode.html\" title=\"struct rustix::fs::Mode\">Mode</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.Mode.html\" title=\"struct rustix::fs::Mode\">Mode</a>","synthetic":false,"types":["rustix::backend::fs::types::Mode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.OFlags.html\" title=\"struct rustix::fs::OFlags\">OFlags</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.OFlags.html\" title=\"struct rustix::fs::OFlags\">OFlags</a>","synthetic":false,"types":["rustix::backend::fs::types::OFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.ResolveFlags.html\" title=\"struct rustix::fs::ResolveFlags\">ResolveFlags</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.ResolveFlags.html\" title=\"struct rustix::fs::ResolveFlags\">ResolveFlags</a>","synthetic":false,"types":["rustix::backend::fs::types::ResolveFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.RenameFlags.html\" title=\"struct rustix::fs::RenameFlags\">RenameFlags</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.RenameFlags.html\" title=\"struct rustix::fs::RenameFlags\">RenameFlags</a>","synthetic":false,"types":["rustix::backend::fs::types::RenameFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.MemfdFlags.html\" title=\"struct rustix::fs::MemfdFlags\">MemfdFlags</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.MemfdFlags.html\" title=\"struct rustix::fs::MemfdFlags\">MemfdFlags</a>","synthetic":false,"types":["rustix::backend::fs::types::MemfdFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.SealFlags.html\" title=\"struct rustix::fs::SealFlags\">SealFlags</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.SealFlags.html\" title=\"struct rustix::fs::SealFlags\">SealFlags</a>","synthetic":false,"types":["rustix::backend::fs::types::SealFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.StatxFlags.html\" title=\"struct rustix::fs::StatxFlags\">StatxFlags</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.StatxFlags.html\" title=\"struct rustix::fs::StatxFlags\">StatxFlags</a>","synthetic":false,"types":["rustix::backend::fs::types::StatxFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.FallocateFlags.html\" title=\"struct rustix::fs::FallocateFlags\">FallocateFlags</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.FallocateFlags.html\" title=\"struct rustix::fs::FallocateFlags\">FallocateFlags</a>","synthetic":false,"types":["rustix::backend::fs::types::FallocateFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/fs/struct.StatVfsMountFlags.html\" title=\"struct rustix::fs::StatVfsMountFlags\">StatVfsMountFlags</a>&gt; for <a class=\"struct\" href=\"rustix/fs/struct.StatVfsMountFlags.html\" title=\"struct rustix::fs::StatVfsMountFlags\">StatVfsMountFlags</a>","synthetic":false,"types":["rustix::backend::fs::types::StatVfsMountFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/io/epoll/struct.CreateFlags.html\" title=\"struct rustix::io::epoll::CreateFlags\">CreateFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/epoll/struct.CreateFlags.html\" title=\"struct rustix::io::epoll::CreateFlags\">CreateFlags</a>","synthetic":false,"types":["rustix::backend::io::epoll::CreateFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/io/epoll/struct.EventFlags.html\" title=\"struct rustix::io::epoll::EventFlags\">EventFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/epoll/struct.EventFlags.html\" title=\"struct rustix::io::epoll::EventFlags\">EventFlags</a>","synthetic":false,"types":["rustix::backend::io::epoll::EventFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.PollFlags.html\" title=\"struct rustix::io::PollFlags\">PollFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.PollFlags.html\" title=\"struct rustix::io::PollFlags\">PollFlags</a>","synthetic":false,"types":["rustix::backend::io::poll_fd::PollFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.ReadWriteFlags.html\" title=\"struct rustix::io::ReadWriteFlags\">ReadWriteFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.ReadWriteFlags.html\" title=\"struct rustix::io::ReadWriteFlags\">ReadWriteFlags</a>","synthetic":false,"types":["rustix::backend::io::types::ReadWriteFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.DupFlags.html\" title=\"struct rustix::io::DupFlags\">DupFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.DupFlags.html\" title=\"struct rustix::io::DupFlags\">DupFlags</a>","synthetic":false,"types":["rustix::backend::io::types::DupFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.PipeFlags.html\" title=\"struct rustix::io::PipeFlags\">PipeFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.PipeFlags.html\" title=\"struct rustix::io::PipeFlags\">PipeFlags</a>","synthetic":false,"types":["rustix::backend::io::types::PipeFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.EventfdFlags.html\" title=\"struct rustix::io::EventfdFlags\">EventfdFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.EventfdFlags.html\" title=\"struct rustix::io::EventfdFlags\">EventfdFlags</a>","synthetic":false,"types":["rustix::backend::io::types::EventfdFlags"]}];
implementors["rustyline"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rustyline/struct.Modifiers.html\" title=\"struct rustyline::Modifiers\">Modifiers</a>&gt; for <a class=\"struct\" href=\"rustyline/struct.Modifiers.html\" title=\"struct rustyline::Modifiers\">Modifiers</a>","synthetic":false,"types":["rustyline::keys::Modifiers"]}];
implementors["tracing_subscriber"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"tracing_subscriber/fmt/format/struct.FmtSpan.html\" title=\"struct tracing_subscriber::fmt::format::FmtSpan\">FmtSpan</a>&gt; for <a class=\"struct\" href=\"tracing_subscriber/fmt/format/struct.FmtSpan.html\" title=\"struct tracing_subscriber::fmt::format::FmtSpan\">FmtSpan</a>","synthetic":false,"types":["tracing_subscriber::fmt::format::FmtSpan"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()